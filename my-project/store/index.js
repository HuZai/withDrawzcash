/**
 * Created by zhengHu on 17-6-23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import bank from './modules/bank'
import bankList from './modules/bankList'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    bank,
    bankList
  },
  strict: debug
})
