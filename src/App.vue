<template class="app">
  <Welcome style="z-index: -1" />
</template>

<script>
import Welcome from "./components/Welcome.vue";

export default {
  name: "App",
  components: {
    Welcome,
  },
  data() {
    return {
      leaveTitle: "ヾ(￣▽￣)Bye~Bye~",
      returnTitle: "~(～￣▽￣)～",
    };
  },
  mounted() {
    this.checkTitle();
  },
  methods: {
    checkTitle() {
      const OriginTitle = document.title;
      let titleTime;
      let that = this;
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          document.title = that.leaveTitle;
          clearTimeout(titleTime);
        } else {
          document.title = that.returnTitle;
          titleTime = setTimeout(function () {
            document.title = OriginTitle;
          }, 2000);
        }
      });
    },
  },
};
</script>

<style >
html,
body,
div {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
