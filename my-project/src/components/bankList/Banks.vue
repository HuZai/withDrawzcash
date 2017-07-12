<template>
  <section>
    <my-header title="选择银行"></my-header>
    <dl class="bank_list">
      <template v-for="bank in banks">
        <dt>{{bank.char}}</dt>
        <dd>
          <ul>
            <li v-for="item in bank.list">
              <div><img :src="item.img"/></div>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </dd>
      </template>
    </dl>
  </section>
</template>
<script>
  import MyHeader from '../base/Header'
  export default {
    components: {
      MyHeader
    },
    data () {
      return {}
    },
    computed: {
      banks () {
        return this.$store.getters.banks1
      }
    },
    methods: {
    },
    beforeCreate () {
      console.log('1')
    },
    mounted () {
      console.log('2')
    },
    created () {
      console.log('created')
      this.$store.dispatch('getBankList')
    }
  }
</script>
<style scoped>
  .form_container{
    width:100%;
  }
  .bank_list dt{
    width:100%;
    height:1.6rem;
    background: #EEEEEE;
    text-indent:1.2rem;
    display:-webkit-box;
    -webkit-box-align:center;
    color:#1A191E;
    font-size:0.746rem;
  }
  .bank_list dd{
    width:100%;
  }
  .bank_list ul{
    width:17.866rem;
    margin:0 auto;
    display:-webkit-box;
    -webkit-box-orient: vertical;
  }
  .bank_list li{
    display:-webkit-box;
    height:3.733rem;
    -webkit-box-align:center;
    border-bottom: 1px solid #ddd;
    border-bottom: 0.7px solid #ddd;
  }
  .bank_list li:last-child{
    border:0;
  }
  .bank_list li div{
    width:1.6rem;
    height:1.6rem;
  }
  .bank_list li span{
    color:#1A191E;
    margin-left:0.8rem;
    font-size:0.853rem;
  }
</style>
