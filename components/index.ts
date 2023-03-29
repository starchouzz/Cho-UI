import { App } from 'vue'
import version from './version'
import HButton from './button'
import './style/index.less'

const components = [
  HButton
]

// 全局动态添加组件
const install = (app: App) => {
  components.forEach(component => {
    app.use(component as any)
  })
  return app
}

export {
  version,
  install,
  HButton
}

export default {
  version,
  install
}
