import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import ChoUI from '@cho-ui/components'
import ChoUI from '../../components'// 测试

const env = import.meta.env
console.log(env)
const app = createApp(App)
console.log('1111', ChoUI)
app.use(ChoUI)
app.mount('#app')
