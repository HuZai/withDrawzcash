/**
 * Created by zhengHu on 17-6-24.
 */
import * as types from '../mutation-types'
import Vue from 'vue'
import bank from '../../api/bank'
const state={
  banks: ''
}
const getters = {
  banks1: state => state.banks
}
const actions = {
  getBankList (context) {
    console.log("getBankList  start")
    console.log(bank.getBankListUrl)
    Vue.http.get(bank.getBankListUrl,{params:{upk:'2'}}).then(res => {
      console.log(res)
      let resJson=JSON.parse(res.bodyText);
      if(resJson.retCode==0){
        let bankList=resJson.banks
        context.commit(types.GET_BANK_LIST,{ bankList })
      }
    },res => {
    })
  }
}
const mutations = {
  [types.GET_BANK_LIST] (state, { bankList }) {
      console.log(bankList)
      state.banks = bankList;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
