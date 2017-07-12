<template>
  <div class="header_inner">
    <div class="go_left"></div>
    <div class="page_title">{{title}}</div>
    <div class="go_right"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    title: {
      default: ''
    },
    isShowLeft: {
      default: true
    },
    isShowRight: {
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*公共头部*/
  .header_inner {
    display: -webkit-box;
    height: 2.32rem;
  }
  .page_title {
    font-size: .906rem;
    -webkit-box-flex: 1;
  }
  .page_title,
  .go_right {
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
  }
  .go_left {
    background: url('//mpic.secooimg.com/images/2016/01/15/new_pro_08.png') no-repeat center;
    background-size: 1.12rem 1.17333333rem;
  }
  .go_left,
  .go_right {
    width: 2.32rem;
    height: 2.32rem;
  }
</style>
