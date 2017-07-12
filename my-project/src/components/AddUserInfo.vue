<template>
  <section class="activtyApp_c" style="font-size: 0;" >
    <my-header title="提现返利"></my-header>
    <div class="inField_box" id="addBankCard">
      <div class="inField_section">
        <div class="inField_panel">
          <router-link :to="{ path: 'bank' }">
            <div class="inField_default">
              <div class="other_content">请添加银行卡</div>
              <div class="other_ref"><span><img src="//mpic.secooimg.com/images/2017/06/19/tian@2x.png"/></span></div>
            </div>
          </router-link>
          <div class="inField_ok">
            <div class="other_content">{{applicantBankName}}({{applicantBankCard}})</div>
            <div class="other_ref"><span><img src="//mpic.secooimg.com/images/2017/06/19/rectangle2x.png"/></span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="form_container">
      <my-input input-tips="请输入申请人姓名" :input-value="applicantUserName" @on-change="onParamChange('applicantUserName',$event)"></my-input>
      <my-input input-tips="请输入提现金额（最多5次/天）" :input-value="applyCash" @on-change="onParamChange('applyCash',$event)"></my-input>
    </div>
  </section>
</template>

<script>
import MyInput from './base/MyInput'
import MyHeader from './base/Header'
export default {
  components: {
    MyInput,
    MyHeader
  },
  data () {
    return {
    }
  },
  computed: {
    applicantBankName: {
      get () {
        return this.$store.getters.bankUser.applicantBankName
      },
      set (val) {
        this.$store.commit('updateMessage', { applicantBankName: val })
      }
    },
    applicantBankCard: {
      get () {
        return this.$store.getters.bankUser.applicantBankCard
      },
      set (val) {
        this.$store.commit('updateMessage', { applicantBankCard: val })
      }
    },
    applicantUserName: {
      get () {
        return this.$store.getters.bankUser.applicantUserName
      },
      set (val) {
        this.$store.commit('updateMessage', { applicantUserName: val })
      }
    },
    applyCash: {
      get () {
        return this.$store.getters.bankUser.applyCash
      },
      set (val) {
        this.$store.commit('updateMessage', { applyCash: val })
      }
    }
  },
  watch: {
    applicantUserName () {
      console.log(this.applicantUserName)
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
    }
  },
  beforeCreate () {
    console.log('1')
  },
  mounted () {
    console.log('2')
  },
  created () {
    this.$store.dispatch('getUserBank')
    console.log('3')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .activtyApp_c{
    background:#fff;
  }
  img{
    width:100%;
    height:100%;
    display:-webkit-box;
  }
  .form_container{
    width:18.4rem;
    margin:0 auto;
  }
  * {
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
  .inField_box{
    width:100%;
    height:3.733rem;
    position:relative;
  }
  .inField_wrap{
    width:100%;
    height:2.987rem;
    position:relative;
    border-bottom:1px solid #ddd;
    border-bottom:0.7px solid #ddd;
    -webkit-transition: background-color .5s linear;
  }
  .inField_box input{
    width: 90%;
    border: 0px;
    background: transparent;
    height: 100%;
    outline: none;
    font-size: 0.906rem;
    position: relative;
    color:#1A191E;
    padding:0;
    padding-top: .4rem;
    -webkit-box-sizing: border-box;
  }
  .inField_box.focus .inField_wrap{
    border-bottom:1px solid #1A191E;
  }
  .tips_ps{
    height:0.746rem;
    position:relative;
  }
  .tips_ps span{
    font-size: 0.906rem;
    color:#bbb;
    display: block;
    position:absolute;
    left:0;
    top:0;
    -webkit-transform: translateY(1.2rem);
    -webkit-transition: transform .5s cubic-bezier(.56,.21,.13,.86);
  }
  .inField_box.selected .tips_ps span{
    -webkit-transform: translateY(0.7rem);
    font-size:14px;
  }
  .clear_inField{
    position:absolute;
    right:0;
    top:0;
    display:-webkit-box;
    -webkit-box-align:center;
    height:100%;
  }
  .clear_inField span{
    width:0.8rem;
    height:0.8rem;
    display:none;
    position:relative;
  }
  .clear_inField span::after,.show_inField span::after{
    position: absolute;
    left: -.7rem;
    top: -.5rem;
    width: 2rem;
    height: 2rem;
    content: "";
    display:block;
  }
  .other_ref{
    position:absolute;
    right:0;
    top:0;
    height:100%;
    display:-webkit-box;
    -webkit-box-align:center;
  }
  .other_ref span{
    width:0.826rem;
    height:0.826rem;
    display:block;
  }
  .bounty_info{
    display:-webkit-box;
    font-size:14px;
    -webkit-box-pack:justify;
    height:2.88rem;
    -webkit-box-align:center;
  }
  .bounty_price{
    color:#1A191E;
  }
  .bounty_get{
    color:#BEA474;
  }
  .confirm_btn{
    width:100%;
    height:2.4rem;
    display:-webkit-box;
    -webkit-box-align:center;
    -webkit-box-pack:center;
    color:#fff;
    background:#000;
    font-size:0.853rem;
    border-radius:0.106rem;
  }
  .confirm_btn.dis_light{
    background:#ddd;
  }
  .confirm_btn:active:not(.dis_light){
    background:#2E2D31;
  }
  .inField_value{
    width: 100%;
    height: 100%;
    font-size: 0.906rem;
    position: relative;
    color: #1A191E;
    -webkit-box-sizing: border-box;
    display:none;
    -webkit-box-align:center;
    padding-top: .4rem;
    -webkit-box-sizing: border-box;
  }
  .clear_inField span.selected{
    display:-webkit-box;
  }
  .inField_box.selected .inField_value{
    display:-webkit-box;
  }
  .inField_section{
    width:100%;
    height:100%;
    border-bottom: 1px solid #ddd;
    border-bottom: 0.7px solid #ddd;
  }
  .inField_panel{
    width:100%;
    height:100%;
    display:-webkit-box;
    -webkit-box-align:center;
    font-size: 0.906rem;
    width: 18.4rem;
    margin: 0 auto;
    position:relative;
  }
  .inField_panel > div{
    display:none;
  }
  .inField_panel a{display: block;width: 100%;text-decoration: none; }
  .inField_box.selected .inField_default{
    display:none;
  }
  .inField_box.selected .inField_ok{
    display:block;
  }
  .inField_box  div.inField_default{
    display:block;
    color:#bbb;
  }
  .inField_ok{
    color:#1A191E;
    display:none;
  }
  .inField_default span{
    width:0.826rem;
    height:0.826rem;
  }
  .inField_ok span{
    width:0.426rem;
    height:0.8rem;
  }
</style>
