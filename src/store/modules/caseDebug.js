import { getRequestInfo } from '@/api/sys'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    // 提交单接口的信息
    caseDeugRun (context, toolformData) {
      const {
        psm,
        methods,
        funcName,
        zone,
        env,
        request,
        rpcContext
      } = toolformData
      return new Promise((resolve, reject) => {
        getRequestInfo({
          psm,
          methods,
          funcName,
          zone,
          env,
          request,
          rpcContext
        })

          .then((data) => {
            console.log(data[0])
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

  }

}
