<template>
  <div>
    <my-header title="添加银行卡"></my-header>
    <section class="activtyApp_c" style="font-size: 0;" >
      <div class="form_container">
        <my-input input-tips="请输入户名" :input-value="bankUserName" @on-change="onParamChange('bankUserName',$event)" ></my-input>
        <router-link :to="{ path: 'banks' }">
        <div :class="{inField_box:true,selected:applicantBankName}" id="addBankCard">
          <div class="tips_ps">
            <span>请选择银行</span>
          </div>
          <div class="inField_wrap">
            <div class="inField_value">{{applicantBankName}}</div>
          </div>
          <div class="other_ref"><span><img src="//mpic.secooimg.com/images/2017/06/19/rectangle2x.png"></span></div>
        </div>
       </router-link>
        <my-input input-tips="请输入开户支行" :input-value="applicantBankName" @on-change="onParamChange('applicantBankName',$event)"></my-input>
        <my-input input-tips="请输入银行卡号" :input-value="applicantBankCard" @on-change="onParamChange('applicantBankCard',$event)"></my-input>
      </div>
    </section>
  </div>

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
      bank2: ''
    }
  },
  computed: {
    bankUserName: {
      get () {
        return this.$store.getters.bankUser.bankUserName
      },
      set (val) {
        this.$store.commit('updateMessage', { bankUserName: val })
      }
    },
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
    bankInfo () {
      return this.$store.getters.bankUser
    }
  },
  watch: {
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
    }
  },
  beforeCreate () {
  },
  mounted () {
    console.log(this.bankInfo)
//    this.bank2 = Object.assign({}, this.bankInfo)
  },
  created () {
    this.$store.dispatch('getUserBank')
    console.log('1-2')
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
    width: 0.426rem;
    height: 0.8rem;
    display: block;
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
  .inField_box.selected .other_ref{
    display:none;
  }
  .inField_box.selected .inField_value{
    display:-webkit-box;
  }
  .form_tips {
    height: 2.773rem;
    width: 100%;
    display: -webkit-box;
    -webkit-box-align: center;
    color: #BEA474;
    font-size: 14px;
  }
  .inField_select{
    display:-webkit-box;
    -webkit-box-pack:justify;
  }
  .inField_select select{
    height:100%;
    width:100%;
    display:block;
    border: 0;
    background-color: transparent;
    outline:none;
    opacity:0;
    position:absolute;
    left:0;
    top:0;
  }
  .inField_select > div{
    width:5.066rem;
    height:100%;
    display:-webkit-box;
    -webkit-box-align:center;
    position:relative;
    padding-top: .4rem;
    -webkit-box-sizing: border-box;
  }
  .inField_select span{
    color: #bbb;
    font-size: 0.906rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    -webkit-box-align: center;
    position: relative;
    max-width: 4.353rem;
  }
  .inField_select span.fullSelect{
    color:#1A191E;
  }
  .inField_select em{
    width: 0;
    height: 0;
    display: block;
    border: solid transparent;
    border-top-color: #1A191E;
    border-width: .25rem .25rem;
    border-bottom: 0;
    margin-left: 0.213rem;
  }
</style>
