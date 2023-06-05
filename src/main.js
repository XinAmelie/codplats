import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// mockjs模块
import '@/mock'
// 导入全局样式
import './styles/index.scss'

import Acrodesgin, { Message, Modal } from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
// 引入图标
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

// 引入Message方法
// import { Message } from '@arco-design/web-vue'

// 导入element_plus
import installElementPlus from './plugins/element'

import $ from 'jquery'

import * as echarts from 'echarts'

import md5 from 'md5'

// 导入路由前置鉴权的js文件
import './permission'

// 全局注册
const app = createApp(App)
installElementPlus(app)

// 挂载 全局属性，可以全局使用
app.config.globalProperties.$echarts = echarts
Message._context = app._context
Modal._context = app._context
app.use(store).use(router).use(Acrodesgin).use(ArcoVueIcon).use($).use(md5).mount('#app')
