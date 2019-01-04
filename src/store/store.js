import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
//创建vuex的仓库
export default  new Vuex.Store({
    //这里的写法是es6的写法:state:state
    state,
    mutations,
    actions
  })
