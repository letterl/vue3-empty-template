import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
//pinia 状态管理
import store from './store'
//路由
import router from './router'
import App from './App.vue'
import './ui'

const app = createApp(App)

app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(store)
app.use(router)
app.mount('#app')
