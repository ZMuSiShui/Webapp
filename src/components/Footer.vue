<template>
  <footer :class="[flag]" :style="{backgroundImage:'url('+top_img+')'}">
    <div id="footer" class="layout">
      <div class="copyright">
        {{ copyright }}
      </div>
      <template>
        <div class="footer-custom-text" v-html="footer_custom_text" />
      </template>
    </div>
  </footer>
</template>
<script>
import BgImg from '../assets/bg.jpg'
export default {
  name: "Footer",
  data() {
    return {
      nowYear: new Date().getFullYear(),
      since: 2020,
      author: "MuSiShui",
      top_img: BgImg,
      footer_custom_text: "",
    };
  },
  mounted() {
    this.getFooterText();
  },
  computed: {
    copyright() {
      if (this.since !== this.nowYear) {
        return `©${this.since} - ${this.nowYear} By ${this.author}`;
      } else {
        return `©${this.nowYear} By ${this.author}`;
      }
    },
    flag() {
      return this.topImg === true ? "footer-bg" : "";
    },
    topImg() {
      if (this.top_img !== undefined) {
        return this.top_img;
      } else {
        return true;
      }
    }
  },
  methods: {
    getFooterText: function () {
      let that = this;
      let url = "https://v1.hitokoto.cn/?encode=json&charset=utf-8";
      fetch(url, {
        method: "GET",
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          that.footer_custom_text = response.hitokoto;
        });
    },
  },
};
</script>
<style>
</style>