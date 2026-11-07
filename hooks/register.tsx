import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

import type { LastTurn, Row } from '../types'

// Tres mods en un solo modulo: Portero, Vigilante y Panel de consumo.

// --- Portero: subagentes de tareas faciles van a Haiku -----------------
const EASY = new Set([
  'Explore',
  'statusline-setup',
  'web-fetch',
  'claude-code-guide',
  's0k1x-equipo-investigador',
])

// --- Vigilante: la cache del prompt caduca a los 5 min (1 h en algunos planes)
const COLD_MS = 5 * 60 * 1000
const MIN_TOKENS = 50_000
const last = atom({ plugin: 's0k1x-skill', key: 'last' } as const, null)

// --- Panel de consumo ---------------------------------------------------
const PANE = 'consumo'
const rows = atom({ plugin: 's0k1x-skill', key: 'rows' } as const, [], {
  shape: 'rows-1',
})

export const register: Register = on => {
  on('agent.spawn', ($, e, next) => {
    if (e.model === undefined && EASY.has(e.subagentType)) {
      $.ui.toast(`Portero: ${e.subagentType} va a Haiku`)
      return next({ ...e, model: 'haiku' })
    }
    return next(e)
  }).catch(($, e, next) => next(e))

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'consumo',
      description: 'Panel con el consumo de tokens por agente',
    })
    return next(e)
  })

  on('command.run', { command: 'consumo' }, async $ => {
    await $.ui.open({ id: PANE, title: 'Consumo' })
    return { text: 'Panel de consumo abierto.' }
  })

  on('turn.complete', async ($, e, next) => {
    const u = e.usage
    if (u !== undefined) {
      if (e.agentId === undefined) {
        const context =
          u.input_tokens + u.cache_read_input_tokens + u.cache_creation_input_tokens
        const turn: LastTurn = { at: await $.clock.now(), tokens: context }
        await update($, last, () => turn)
      }
      const id = e.agentId ?? 'principal'
      const used = u.input_tokens + u.output_tokens + u.cache_creation_input_tokens
      await update($, rows, list => {
        const found = list.find(r => r.id === id)
        if (found === undefined) {
          const row: Row = { id, model: u.model, turns: 1, tokens: used }
          return [...list, row]
        }
        return list.map(r =>
          r.id === id
            ? { ...r, model: u.model, turns: r.turns + 1, tokens: r.tokens + used }
            : r,
        )
      })
    }
    return next(e)
  })

  on('prompt.submit', async ($, e, next) => {
    const turn = await read($, last)
    if (turn !== null && !e.command) {
      const idle = (await $.clock.now()) - turn.at
      if (idle > COLD_MS && turn.tokens > MIN_TOKENS) {
        const mins = Math.round(idle / 60000)
        $.ui.toast(
          `Vigilante: cache fria (${mins} min). Este mensaje relee ~${turn.tokens.toLocaleString()} tokens sin cache.`,
        )
      }
    }
    return next(e)
  }).catch(($, e, next) => next(e))

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text } = $.ui.resolve(e)
    const list = await read($, rows)
    const total = list.reduce((n, r) => n + r.tokens, 0)

    return (
      <Box flexDirection="column">
        <Text bold>Consumo por agente (tokens nuevos)</Text>
        {list.length === 0 && <Text dimColor>Aun sin datos.</Text>}
        {list.map(r => (
          <Text>
            {r.id.slice(0, 12)} · {r.model} · {r.turns} turnos · {r.tokens.toLocaleString()}
          </Text>
        ))}
        <Text dimColor>Total: {total.toLocaleString()}</Text>
      </Box>
    )
  })
}
