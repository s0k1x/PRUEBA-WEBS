import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

import type { LastTurn } from '../types'

const last = atom({ plugin: 'vigilante', key: 'last' } as const, null)

// La cache del prompt caduca a los 5 min (1 h en algunos planes).
const COLD_MS = 5 * 60 * 1000
const MIN_TOKENS = 50_000

export const register: Register = on => {
  on('turn.complete', async ($, e, next) => {
    const u = e.usage
    if (u !== undefined && e.agentId === undefined) {
      const tokens =
        u.input_tokens + u.cache_read_input_tokens + u.cache_creation_input_tokens
      const turn: LastTurn = { at: await $.clock.now(), tokens }
      await update($, last, () => turn)
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
  })
}
