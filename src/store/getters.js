/**
 getters快捷访问
 **/

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /*
  不等于空的时候，才返回json之后的数据队形
  @returns true 表示已存在用户信息
  */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
