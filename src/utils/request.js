
import { Message } from '@arco-design/web-vue'
import { isCheckTimeout } from '@/utils/auth'

//  封装请求的模块
import axios from 'axios'
import store from '@/store'
// # 实例axios的对象,通过create定制化自己的请求模块
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: '/api',
  timeout: 5000

})

// axios请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 如果有token header中加上认证
      // 前端主动介入token是否失效
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }

      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }

)

// axios返回值拦截器
service.interceptors.response.use(
  response => {
    console.log(response.data)
    const { msg, code, retlist, success, error } = response.data
    if (success) {
      console.log(retlist)
      return retlist
    } else {
      //  Promise.reject 返回一个被拒绝的 Promise 对象。 通过使用 Error 的实例获取错误原因
      Message.error(error)
      return Promise.reject(new Error(error))
    }
  },
  error => {
    console.log(error)
    //  999是我自定义的token过期的标志；后端token过期
    if (error.response && error.response.data && error.response.data.code === 999) {
      // token失效
      store.dispatch('user/logout')
    }
    Message.error(error.response.data.error)
    error = error.response.data.error
    return Promise.reject(error)
  }
)

export default service
