export type Row = { id: string; model: string; turns: number; tokens: number }

declare module 'claude-code' {
  interface PluginState {
    'panel-consumo': { rows: Shaped<Row[]> }
  }
}
