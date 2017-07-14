import Vue from 'vue'
import Router from 'vue-router'
const UserInfo = resolve => require(['../components/AddUserInfo.vue'], resolve)
const BankInfo = resolve => require(['../components/AddBankInfo.vue'], resolve)
const Banks = resolve => require(['@/components/bankList/Banks.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/bank',
      name: 'bankInfo',
      component: BankInfo
    },
    {
      path: '/banks',
      name: 'banks',
      component: Banks
    }
  ]
})
