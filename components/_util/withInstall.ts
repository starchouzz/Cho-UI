import { Component, Plugin } from 'vue'
import { HObjectDirective } from './interface'

export function withInstall<T extends Plugin> (
  main: T,
  extra?: Record<string, Component>,
  directives?: HObjectDirective[]
): T {
  const _main = main as any
  _main.install = (app: any) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component((comp as any).name, comp)
    }
    if (directives) {
      for (const directive of directives) {
        app.directive(directive.name, directive)
      }
    }
  }
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      _main[key] = comp
    }
  }
  return _main as T
}
