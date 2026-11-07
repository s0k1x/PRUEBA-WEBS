export type LastTurn = { at: number; tokens: number }

declare module 'claude-code' {
  interface PluginState {
    vigilante: { last: LastTurn | null }
  }
}
