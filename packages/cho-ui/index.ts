import { App } from 'vue'
import Foo from '@cho-ui/foo'
import Test8888 from '@cho-ui/test8888'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  Test8888
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
