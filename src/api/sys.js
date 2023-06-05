// 导入实例
import request from '@/utils/request'

/*
用户登录接口
*/
export const login = (data) => {
  return request(
    {
      url: '/account_login/v3/',
      method: 'POST',
      data
      // formdata的格式
      // headers: {
      //   // 'Content-Type': 'multipart/form-data',
      //   // 'Content-Type': 'application/json'
      //   // 'X-CSRFToken': '3d7JhpGcfmuCekYh2xlVGrUeToAn4kWsKdsU8eRNjslOHXU0IOxZRnjSHXDFGQmG'
      // }
    }
  )
}

/*
获取用户的详细信息
*/

export const getUserInfo = () => {
  return request({
    url: 'sys/profile/'
  })
}

/* 提交单接口的信息 */

// post方式
export const getRequestInfo = (data) => {
  return request({
    // 注意一定要加 斜杠不然会301 坑爹玩意 /
    url: 'case/debug/',
    method: 'POST',
    data
  })
}

// get的方式
// export const getRequestInfo = (params) => {
//   return request({
//     // 注意一定要加 斜杠不然会301 坑爹玩意 /
//     url: 'case/debug/',
//     method: 'GET',
//     params
//   })
// }
