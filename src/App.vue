<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Welcome />
      </div>
      <div class="section">
        <h2>Second 2</h2>
      </div>
      <div class="section">
        <h2>Second 3</h2>
      </div>
    </full-page>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";

export default {
  name: "App",
  components: { Welcome },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
      },
    };
  },
  methods: {
    afterLoad() {
      console.log('After load')
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.section {
  text-align: center;
  color: aliceblue;
}
</style>
