/**
 * Created by zhengHu on 17-6-24.
 */
import * as types from '../mutation-types'
import bank from '../../api/bank'
const state={
  bank: ''
}
const getters = {
  bankUser: state => state.bank
}
const actions = {
  getUserBank (context) {
    console.log('------')
    console.log(JSON.stringify(state.bank))
    if (state.bank == '') {
      bank.getBankInfo(bankInfo => {
        console.log(bankInfo)
        context.commit(types.GET_BANK_INFO, { bankInfo })
      })
    }else {
      context.commit(types.GET_BANK_INFO, { bankInfo: state.bank})
    }
  }
}
const mutations = {
  [types.GET_BANK_INFO] (state, { bankInfo }) {
      console.log(bankInfo)
      state.bank = bankInfo;
  },
  updateMessage (state, message) {
    console.log(message)
    Object.entries(message).forEach(([key, value]) => {
      state.bank[key]=value
    });
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
