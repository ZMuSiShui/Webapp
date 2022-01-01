<template>
  <div>
    <div v-for="(i, index) in container" :key="index" class="container">
      <div class="section">
        <h3 class="grid-title">
          <span>{{ i.grid_title }}</span>
        </h3>
        <p class="grid-title-describe">{{ i.grid_title_describe }}</p>
        <div class="item-box">
          <div v-for="(j, index) in i.items" :key="index" class="item">
            <a :href="j.href" target="_blank">
              <article :class="[`item-color ${j.color_class}`]">
                <div class="item-logo">
                  <i :class="[`fa-${j.item_logo} fa`]" aria-hidden="true"></i>
                </div>
                <h3>{{ j.title }}</h3>
                <p>{{ j.describe }}</p>
                <i class="light"></i>
              </article>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      container: {
        product0: {
          grid_title: "Me / 我的原创",
          grid_title_describe: "我的原创作品合集",
          items: {
            theme0: {
              title: "JieのBlog",
              describe: "我的 Blog，学习记录",
              href: "https://blog.zhangjie.me",
              item_logo: "blog",
              color_class: "color1",
            },
            theme1: {
              title: "Github",
              describe: "Github 文件加速下载",
              href: "https://github.zmusishui.workers.dev/",
              item_logo: "github",
              color_class: "color2",
            },
            theme2: {
              title: "WiKi",
              describe: "WiKi 百科代理访问",
              href: "https://wiki.zmusishui.workers.dev/",
              item_logo: "wikipedia-w",
              color_class: "color3",
            },
            theme3: {
              title: "IPs Search",
              describe: "简单好用的 IP 查询工具(Python版)",
              href: "https://github.com/ZMuSiShui/ipsearch",
              item_logo: "map-marker-alt",
              color_class: "color4",
            },
          },
        },
        product1: {
          grid_title: "Website / 摸鱼",
          grid_title_describe: "摸鱼向OoO常用网站",
          items: {
            theme0: {
              title: "掘金",
              describe: "代码不止，掘金不停",
              href: "https://juejin.cn/",
              item_logo: "internet-explorer",
              color_class: "color5",
            },
            theme1: {
              title: "哔哩哔哩",
              describe: "哔哩哔哩 (゜-゜)つロ 干杯~",
              href: "https://www.bilibili.com",
              item_logo: "tv",
              color_class: "color4",
            },
            theme2: {
              title: "Youtube Music",
              describe: "最全曲库的音乐网站",
              href: "https://music.youtube.com",
              item_logo: "youtube",
              color_class: "color2",
            },
            theme3: {
              title: "3DM Games",
              describe: "3DM游戏资讯网站",
              href: "https://www.3dmgame.com/",
              item_logo: "gamepad",
              color_class: "color6",
            },
          },
        },
        product2: {
          grid_title: "Tools / 常用工具",
          grid_title_describe: "工作时常用网站",
          items: {
            theme0: {
              title: "Json Format",
              describe: "Json 格式化工具",
              href: "https://www.json.cn/",
              item_logo: "tools",
              color_class: "color3",
            },
            theme1: {
              title: "Ping",
              describe: "IPIP 全球Ping工具",
              href: "https://tools.ipip.net/newping.php",
              item_logo: "hand-point-right",
              color_class: "color1",
            },
            theme2: {
              title: "IP 查询",
              describe: "IPINFO IP 查询工具",
              href: "https://ipinfo.io/",
              item_logo: "map-marker-alt",
              color_class: "color4",
            },
            theme3: {
              title: "Github",
              describe: "全球最大同性交友网站",
              href: "https://github.com/",
              item_logo: "github-alt",
              color_class: "color2",
            },
          },
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
a:focus {
  /* firefox */
  outline: none;
}
/* 页面主容器 */
.container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
}
/* 栅格系统 */
.item-box {
  margin-left: -15px;
  margin-right: -15px;
}
.item-box:before,
.item-box:after {
  content: " ";
  display: table;
}
.item-box:after {
  clear: both;
}
.item {
  width: 25%;
  float: left;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}
/* 响应式优化 */
@media screen and (max-width: 1150px) {
  .container {
    width: 950px;
  }
}
@media screen and (max-width: 1000px) {
  .container {
    width: 750px;
  }
  .item {
    width: 50%;
  }
}
@media screen and (max-width: 800px) {
  .container {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .welcome > p {
    font-size: 20px;
  }
}
@media screen and (max-width: 600px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .item {
    width: 100%;
  }
}
/* 分类大块 */
.section {
  margin-top: 30px;
  margin-bottom: 10px;
}
/* 子标题 */
.grid-title {
  text-align: center;
  font-weight: normal;
  font-size: 26px;
  margin: 20px 0 13px 0;
}
.grid-title > span {
  font-family: Segoe UI Light, Microsoft YaHei, Arial, Helvetica, sans-serif;
  margin-right: 10px;
}
.grid-title-describe {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}
/* 彩色块，样式来自 alloyteam(http://www.alloyteam.com/) */
.item-color {
  font-family: microsoft yahei;
  background-color: #70c3ff;
  padding: 20px 10px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 25px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.item-color:hover {
  transform: translateY(-6px);
  -webkit-transform: translateY(-6px);
  -moz-transform: translateY(-6px);
  box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.5);
  -webkit-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.5);
  -moz-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.5);
}

.item-color.color1 {
  background-color: #70c3ff !important;
}
.item-color.color2 {
  background-color: #fd6a7f !important;
}
.item-color.color3 {
  background-color: #7f8ea0 !important;
}
.item-color.color4 {
  background-color: #89d04f !important;
}
.item-color.color5 {
  background-color: #998899 !important;
}
.item-color.color6 {
  background-color: #888069 !important;
}

.item-color > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

.item-color > .item-logo {
  height: 60px;
  overflow: hidden;
  display: inline-block;
}
.item-color > .item-logo > img {
  height: 100%;
}

.item-color > .item-logo > .fa {
  font-size: 60px;
  line-height: 60px;
}

.item-color > h3 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

.item-color > .light {
  cursor: pointer;
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.5),
    hsla(0, 0%, 100%, 0)
  );
  transform: skewx(-25deg);
  -o-transform: skewx(-25deg);
  -moz-transform: skewx(-25deg);
  -webkit-transform: skewx(-25deg);
}
.item-color:hover > .light {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  left: 100%;
}
/* 只有chrome才能享用的特效…… */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .mk-big-title > h4 {
    background: #eee
      url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAHklEQVQImWNkYGBgYGD4//8/A5wF5SBYyAr+//8PAPOCFO0Q2zq7AAAAAElFTkSuQmCC)
      repeat;
    text-shadow: 5px -5px black, 4px -4px white;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
}
</style>
