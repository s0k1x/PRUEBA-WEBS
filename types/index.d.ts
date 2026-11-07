export type LastTurn = { at: number; tokens: number }
export type Row = { id: string; model: string; turns: number; tokens: number }

declare module 'claude-code' {
  interface PluginState {
    's0k1x-skill': { last: LastTurn | null; rows: Shaped<Row[]> }
  }
}
