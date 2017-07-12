/**
 * Created by zhengHu on 17-6-24.
 */
const _bank={
  'applicantBankCard': '3333233',
  'applicantBankName': '中国银行',
  'applicantMobile': '',
  'applicantUserName': 'test',
  'applyCash': '1000',
  'bankAddress': '',
  'bankCity': '',
  'bankCounty': '',
  'bankProvince': '',
  'bankUserName': 'testhu',
  'captcha': ''
}
export default {
  getBankListUrl: 'http://las.secoo.com/api/user/user_applicant_bank',
  getBankInfo (callback) {
    setTimeout(() => { callback(_bank) },1000)
  }
}
