<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Welcome />
      </div>
      <div class="section">
        <Winnav />
      </div>
      <!-- <div class="section">
        <h2>Second 3</h2>
      </div> -->
    </full-page>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Winnav from "./components/Winnav.vue";

export default {
  name: "App",
  components: {
    Welcome,
    Winnav,
  },
  data() {
    return {
      leaveTitle: "ヾ(￣▽￣)Bye~Bye~",
      returnTitle: "~(～￣▽￣)～",
      options: {
        menu: "#menu",
        navigation: true,
        afterLoad: this.afterLoad,
        anchors: ["home", "nav"],
      },
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
    afterLoad() {
      /* eslint-disable */
      $(".tiles-group").animate({
        left: 0,
      });

      $(window).on(Metro.events.resize + "-start-screen-resize", function () {
        setTilesAreaSize();
      });

      $(window).on(Metro.events.mousewheel, function (e) {
        var up = e.deltaY < 0 ? -1 : 1;
        var scrollStep = 50;
        $(".start-screen")[0].scrollLeft += scrollStep * up;
      });
    },
  },
};
</script>
<style>
@import url(https://unpkg.com/fullpage.js/dist/fullpage.min.css);
* {
  margin: 0;
  padding: 0;
}
.section {
  text-align: center;
  color: aliceblue;
}
</style>
