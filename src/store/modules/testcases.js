import {
  getDirectoryCaseNum,
  getCaselist,
  getInterfaceList,
  getPlanManList,
  getPlanIfList,
  getdemandLists,
  getdefectLists
} from '@/api/testcases'

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {

    // 获取手工用例的目录
    async getCaseTreeDir (context) {
      const res = await getDirectoryCaseNum()
      return res
    },
    // 获取手工用例table的caselist
    async getCaselist (context) {
      const caseslist = await getCaselist()
      return caseslist
    },
    // 接口用例 list列表
    async getInterfaceList (context) {
      const InterfaceList = await getInterfaceList()
      return InterfaceList
    },
    // 手工计划的接口
    async getPlanManListas (context) {
      const getPlanManListres = await getPlanManList()
      return getPlanManListres
    },

    // 接口计划的接口list
    async getPlanIfListas (context) {
      const getPlanIfLists = await getPlanIfList()
      return getPlanIfLists
    },

    // 需求的接口list
    async getdemandLists (context) {
      const getdemandList = await getdemandLists()
      return getdemandList
    },

    //  缺陷接口的list
    async getdefectListtables (context) {
      const getfectList = await getdefectLists()
      return getfectList
    }

  }

}
