// /**
//  鉴权
//  **/

// #前置路由守卫

import router from '@/router'
import store from '@/store'

// 定义白名单，用户无权限也可以进去的页面
const whitelist = ['/login']

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 存在 token ， store.state.user.token进入主页   getter快捷访问
    if (to.path === '/login') {
      next('/')
    } else {
      // 其他页面就正常跳转
      if (!store.getters.hasUserInfo) {
        store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // indexOf()方法：如果要检索的字符串值没有出现，则该方法返回 -1； > -1 就是出现了
    if (whitelist.indexOf(to.path) > -1) {
      next()
    } else {
      // 去非白名单的路由
      next('/login')
    }
  }
})
