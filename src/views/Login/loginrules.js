
// 校验规则的js文件

// 简单校验username

const UserRules = (status) => {
  return (value, callback) => {
    if (typeof (value) === 'undefined') {
      value = ''
    }

    if (value.length < 4 && value.length >= 1) {
      callback(new Error('Must be 4 digits'))
      status.value = 'validating'
      setTimeout(() => {
        status.value = 'error'
      }, 500)
    } else {
      // 回调成功
      callback()
      status.value = 'validating'
      if (value.length === 0) {
        setTimeout(() => {
          status.value = 'error'
        }, 500)
      } else {
        setTimeout(() => {
          status.value = 'success'
        }, 500)
      }
    }
  }
}

// 简单校验密码

const PwdRules = (status) => {
  return (value, callback) => {
    if (typeof (value) === 'undefined') {
      value = ''
    }
    if (value.length < 6 && value.length >= 1) {
      callback(new Error('Password length must be greater than 6 digits'))
      status.value = 'validating'
      setTimeout(() => {
        status.value = 'error'
      }, 500)
    } else {
      status.value = 'validating'
      if (value.length === 0) {
        status.value = 'validating'
        setTimeout(() => {
          status.value = 'error'
        }, 500)
      } else {
        setTimeout(() => {
          status.value = 'success'
        }, 500)
      }
    }
  }
}

export { UserRules, PwdRules }
