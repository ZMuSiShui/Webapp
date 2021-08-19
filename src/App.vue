<template>
  <div id="app">
    <Header />
    <Container/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'

export default {
  name: 'app',
  components: {
    Header,
    Container,
    Footer
  },
  methods: {
    is_mobile: function() {
      if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementsById("page-header")[0].className="is-mobile"
        document.getElementsByTagName("footer")[0].className="is-mobile"
      }
    }
  }
}
</script>

<style>
</style>
