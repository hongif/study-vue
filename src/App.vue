<template>
  <div id="app">
    <component :is="component"></component>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'app',
    data() {
        return {
            component: Layout
      }
    },
  components: {
    Layout,
  }
}
</script>

<style>
  /*@import './assets/css/animate.css';*/
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/common.css';
  @import './assets/css/common.dev.css';
  /*@import './assets/css/default.css';*/
  /*@import './assets/css/nanoscroller.css';*/
  /*@import './assets/css/normalize.css';*/
  /*@import './assets/css/renew__main_banner.css';*/
  /*@import './assets/css/slider.css';*/
  /*@import './assets/css/top.css';*/



</style>
