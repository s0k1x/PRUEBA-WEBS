import type { Register } from 'claude-code'

// Subagentes de lectura/busqueda: tareas faciles, no necesitan Opus.
const EASY = new Set(['Explore', 'statusline-setup', 'web-fetch', 'claude-code-guide'])

export const register: Register = on => {
  on('agent.spawn', ($, e, next) => {
    if (e.model === undefined && EASY.has(e.subagentType)) {
      $.ui.toast(`Portero: ${e.subagentType} va a Haiku`)
      return next({ ...e, model: 'haiku' })
    }
    return next(e)
  })
}
