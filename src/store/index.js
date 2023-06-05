import { createStore } from 'vuex'
import user from '@/store/modules/user'
import getters from '@/store/getters'
import caseDebug from '@/store/modules/caseDebug'
import testcases from '@/store/modules/testcases'

export default createStore({
  getters,
  modules: {
    user,
    caseDebug,
    testcases
  }

})
