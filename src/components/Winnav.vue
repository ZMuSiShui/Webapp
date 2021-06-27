<template>
  <div class="bg-dark fg-white h-vh-100 m4-cloak" ref="divGenres">
    <div class="container-fluid start-screen h-100">
      <h1 class="start-screen-title">我的收藏</h1>
      <div class="clear" :style="{tileArea}">
        <div
          class="tiles-grid tiles-group size-2 fg-white"
          data-group-title="学习文档"
        >
          <div v-for="item in docs" :key='item.url' data-role="tile" class="fg-white" :data-size="item.size">
            <a :href="item.url">
              <img :src="item.imgSrc"/>
            </a>
          </div>
        </div>
        <div
          class="tiles-grid tiles-group size-2 fg-white"
          data-group-title="学习平台"
        >
          <div v-for="item in learn" :key='item.url' data-role="tile" class="fg-white" :data-size="item.size">
            <a :href="item.url">
              <img :src="item.imgSrc"/>
            </a>
          </div>
        </div>
        <div
          class="tiles-grid tiles-group size-1 fg-white"
          data-group-title="常用软件"
        >
          <div v-for="item in software" :key='item.url' data-role="tile" class="fg-white" :data-size="item.size">
            <a :href="item.url">
              <img :src="item.imgSrc"/>
            </a>
          </div>
        </div>
        <div
          class="tiles-grid tiles-group size-2 fg-white"
          data-group-title="~（￣▽￣）~ 摸鱼"
        >
          <div v-for="item in moyu" :key='item.url' data-role="tile" class="fg-white" :data-size="item.size">
            <a :href="item.url">
              <img :src="item.imgSrc"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Winnav",
  data() {
    return {
      tileAreaWidth: 80,
      tileArea: {
        width: 1750
      },
      docs: [
        {
          size: "medium",
          url: "https://cn.vuejs.org/",
          imgSrc: "./images/doc/VueJS.png"
        },{
          size: "medium",
          url: "https://docs.python.org/zh-cn/3/",
          imgSrc: "./images/doc/Python.png"
        },{
          size: "medium",
          url: "https://go-zh.org/doc/",
          imgSrc: "./images/doc/Go.png"
        },{
          size: "small",
          url: "https://developer.mozilla.org/zh-CN/",
          imgSrc: "./images/doc/MDN.png"
        },{
          size: "small",
          url: "https://fastapi.tiangolo.com/zh/",
          imgSrc: "./images/doc/FastAPI.png"
        },{
          size: "small",
          url: "https://element-plus.gitee.io/",
          imgSrc: "./images/doc/element-ui.png"
        },{
          size: "small",
          url: "https://panjiachen.github.io/vue-element-admin-site/zh/",
          imgSrc: "./images/doc/vue-element-admin.png"
        },{
          size: "medium",
          url: "https://www.docker.org.cn/",
          imgSrc: "./images/doc/Docker.png"
        },{
          size: "medium",
          url: "https://man.linuxde.net/",
          imgSrc: "./images/doc/Linux.png"
        },
      ],
      learn:[
        {
          size: "medium",
          url: "https://github.com/",
          imgSrc: "./images/learn/Github.png"
        },{
          size: "medium",
          url: "https://www.runoob.com/",
          imgSrc: "./images/learn/runoob.png"
        },{
          size: "medium",
          url: "https://www.csdn.net/",
          imgSrc: "./images/learn/CSDN.png"
        },{
          size: "medium",
          url: "https://juejin.cn/",
          imgSrc: "./images/learn/juejin.png"
        },{
          size: "wide",
          url: "https://www.bookstack.cn/",
          imgSrc: "./images/learn/bookstack.png"
        },
      ],
      software: [
        {
          size: "small",
          url: "https://download.sysinternals.com/files/DebugView.zip",
          imgSrc: "./images/software/debugview.png"
        },{
          size: "small",
          url: "https://download.sysinternals.com/files/ProcessExplorer.zip",
          imgSrc: "./images/software/Procexp.png"
        },{
          size: "small",
          url: "http://www.kelai.com.cn/download/csnas_tech_13.5.0.13528_x64.rar",
          imgSrc: "./images/software/cola.png"
        },{
          size: "small",
          url: "https://dl.softmgr.qq.com/original/System/Wireshark-win64-3.4.6.exe",
          imgSrc: "./images/software/wireshark.png"
        },
      ],
      moyu: [
        {
          size: "medium",
          url: "https://www.bilibili.com",
          imgSrc: "./images/moyu/bilibili.png"
        },{
          size: "medium",
          url: "https://www.twitter.com",
          imgSrc: "./images/moyu/twitter.png"
        },{
          size: "medium",
          url: "https://music.youtube.com",
          imgSrc: "./images/moyu/youtubemusic.png"
        },{
          size: "medium",
          url: "https://bbs.mihoyo.com/ys/strategy/",
          imgSrc: "./images/moyu/Genshin_Impact.jpg"
        },{
          size: "wide",
          url: "https://3dmgame.com",
          imgSrc: "./images/moyu/3dmgame.png"
        }
      ]
    };
  },
  beforeCreate() {
    //第一个生命周期函数，实例未创建即执行，不能操作data与methods
  },
  created() {
    //最早能操作data与methods的方法
  },
  beforeMount() {
    //页面在内存中编辑完成，js内容尚未渲染到页面
  },
  mounted() {
    this.setTilesAreaSize();
  },
  methods: {
    setTilesAreaSize() {
      const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      const groups = Array.from(
        this.$refs.divGenres.querySelectorAll(".tiles-group")
      );
      groups.forEach(() => {
        // eslint-disable-next-line
        if (width <= Metro.media_sizes.LD) {
          this.tileAreaWidth = width;
        } else {
          this.tileAreaWidth +=
            this.$refs.divGenres.querySelector(".tiles-group").offsetWidth + 80;
        }
      });

      this.tileArea.width = this.tileAreaWidth
    },
  },
};
</script>
<style scoped>
.start-screen {
  min-width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 20px;
}
.start-screen-title {
  top: 20px;
  left: 80px;
  display: none;
}
[class*="tile-"] {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
.tiles-group {
  margin-left: 0;
  margin-top: 50px;
}
@media all and (min-width: 768px) {
  .start-screen-title {
    display: block;
  }
  .start-screen {
    padding: 140px 80px 0 0;
  }
  .tiles-group {
    left: 100px;
  }
  .tiles-group {
    margin-left: 80px;
  }
}
.bg-dark {
  background-color: #1d1d1d !important;
}
.bg-white {
  background-color: #ffffff !important;
}
</style>
<style src='../assets/style/metro.min.css' scoped></style>