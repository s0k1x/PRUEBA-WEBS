export type LastTurn = { at: number; tokens: number }
export type Row = { id: string; model: string; turns: number; tokens: number }

declare module 'claude-code' {
  interface PluginState {
    'kit-completo': { last: LastTurn | null; rows: Shaped<Row[]> }
  }
}
