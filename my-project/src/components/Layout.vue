<template>
  <div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  <!---->
  /*适配320 360 375 384 414*/
  @media screen and (min-width: 320px) {
    html {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 360px) {
    html {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 383px) and (orientation: portrait) {
    html {
      font-size: 18.75px;
    }
  }
  @media only screen and (min-width: 384px) and (max-width: 413px) and (orientation: portrait) {
    html {
      font-size: 19.2px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {
    html {
      font-size: 20.7px;
    }
  }
  /**/
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
img{
  width:100%;
  height:100%;
  display:-webkit-box;
}
</style>
