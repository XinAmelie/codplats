import { login, getUserInfo } from '@/api/sys'
// 路由器
import router from '@/router'

import { getItem, removeAllItem, setItem } from '@/utils/storage'

import { TOKEN } from '@/constant/index'

import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    // 如果有值就显示，没有就为空
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  // 同步执行
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  // 异步执行,一般接口用它来处理
  actions: {
    // 登录
    login (context, userinfo) {
      // key要和组件传过来的一致;不需要解构了,直接原生的传入即可
      const { username, password } = userinfo
      console.log({ username, password })
      return new Promise((resolve, reject) => {
        login(
          // userinfo
          {
            username,
            password
          }
        )
          .then(data => {
            // 成功后的提示语  this.commit属于执行 mutations的方法
            console.log(data)
            this.commit('user/setToken', data[0].data.token)
            router.push('/')
            // 保存登录的时间到localstorage中去
            setTimeStamp()
            // 主动请求个人信息
            this.dispatch('user/getUserInfo')
            resolve(data) // 标记为已解决，执行下一步
          })
          .catch(err => {
            reject(err) // 标注失败即可
          })
      })
    },

    // 登出异步操作
    logout (context) {
      this.commit('user/setToken', '')
      removeAllItem()
      router.push('/login')
    },

    // 获取用户的信息
    async getUserInfo (context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }

  }

}
