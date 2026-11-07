import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

import type { Row } from '../types'

const PANE = 'consumo'
const rows = atom({ plugin: 'panel-consumo', key: 'rows' } as const, [], {
  shape: 'rows-1',
})

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'consumo',
      description: 'Panel con el consumo de tokens por agente',
    })
    void $.ui.open({ id: PANE, title: 'Consumo' })
    return next(e)
  })

  on('command.run', { command: 'consumo' }, async $ => {
    await $.ui.open({ id: PANE, title: 'Consumo' })
    return { text: 'Panel de consumo abierto.' }
  })

  on('turn.complete', async ($, e, next) => {
    const u = e.usage
    if (u !== undefined) {
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
