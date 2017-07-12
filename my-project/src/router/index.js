import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '@/components/AddUserInfo.vue'
import BankInfo from '@/components/AddBankInfo.vue'
import Banks from '@/components/bankList/Banks.vue'

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
