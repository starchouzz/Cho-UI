import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import ChoUI from '@cho-ui/components'

console.log(3333, ChoUI)

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(ChoUI)
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}