<template>
  <div class="bg-dark fg-white h-vh-100 m4-cloak" ref="divGenres">
    <div class="container-fluid start-screen h-100">
      <h1 class="start-screen-title">Start</h1>
      <div class="tiles-area clear" ref="tiles">
        <div
          class="tiles-grid tiles-group size-2 fg-white"
          data-group-title="General"
        >
          <a
            href="https://github.com/olton/Metro-UI-CSS"
            data-role="tile"
            class="bg-indigo fg-white tile-medium"
          >
            <span class="mif-github icon"></span>
            <span class="branding-bar">Github</span>
            <span class="badge-bottom">30</span>
          </a>
          <div data-role="tile" class="bg-cyan fg-white">
            <span class="mif-envelop icon"></span>
            <span class="branding-bar">Email</span>
            <span class="badge-bottom">10</span>
          </div>
          <div data-role="tile" class="bg-orange fg-white" data-size="wide">
            <span class="mif-chrome icon"></span>
            <span class="branding-bar">Chrome</span>
          </div>
          <div data-role="tile" data-size="small">
            <span class="mif-apple icon"></span>
          </div>
          <div data-role="tile" data-size="small" class="bg-red fg-white">
            <span class="mif-bell icon"></span>
          </div>
          <div
            data-role="tile"
            data-size="small"
            class="bg-teal fg-white col-1 row-6"
          >
            <span class="mif-windows icon"></span>
          </div>
          <div
            data-role="tile"
            data-size="small"
            class="bg-brown fg-white col-2 row-6"
          >
            <span class="mif-wind icon"></span>
          </div>
          <div data-role="tile" class="bg-cyan fg-white">
            <span class="mif-table icon"></span>
            <span class="branding-bar">Tables</span>
          </div>
        </div>
        <div
          class="tiles-grid tiles-group size-2 fg-white"
          data-group-title="Images"
        >
          <div data-role="tile" data-cover="../assets/images/me.jpg">
            <span class="branding-bar">Sergey Pimenov</span>
          </div>
          <div
            data-role="tile"
            data-effect="animate-fade"
            data-effect-duration="1000"
          >
            <div class="slide" data-cover="../assets/images/me2.jpg"></div>
            <div class="slide" data-cover="../assets/images/me.jpg"></div>
            <div class="slide" data-cover="../assets/images/me3.jpg"></div>
            <span class="branding-bar">Gallery</span>
          </div>
          <div
            data-role="tile"
            data-size="wide"
            data-effect="animate-slide-left"
          >
            <div class="slide" data-cover="../assets/images/1.jpg"></div>
            <div class="slide" data-cover="../assets/images/2.jpg"></div>
            <div class="slide" data-cover="../assets/images/3.jpg"></div>
            <div class="slide" data-cover="../assets/images/4.jpg"></div>
            <div class="slide" data-cover="../assets/images/5.jpg"></div>
            <span class="branding-bar">Gallery</span>
          </div>
          <div data-role="tile" data-size="wide" data-effect="image-set">
            <img src="../assets/images/bg.jpg"/>
            <!-- <img src="../assets/images/jeki_chan.jpg" />
            <img src="../assets/images/shvarcenegger.jpg" />
            <img src="../assets/images/vin_d.jpg" />
            <img src="../assets/images/jolie.jpg" />
            <img src="../assets/images/jek_vorobey.jpg" /> -->
          </div>
        </div>
        <div
          class="tiles-grid tiles-group size-1 fg-white"
          data-group-title="Office"
        >
          <div data-role="tile" data-size="small">
            <img src="../assets/images/outlook.png" class="icon" />
          </div>
          <div data-role="tile" data-size="small" class="bg-brown">
            <img src="../assets/images/word.png" class="icon" />
          </div>
          <div data-role="tile" data-size="small" class="bg-green">
            <img src="../assets/images/excel.png" class="icon" />
          </div>
          <div data-role="tile" data-size="small" class="bg-red">
            <img src="../assets/images/access.png" class="icon" />
          </div>
          <div data-role="tile" data-size="small" class="bg-teal">
            <img src="../assets/images/powerpoint.png" class="icon" />
          </div>
        </div>
        <div
          class="tiles-grid tiles-group size-2 fg-white"
          data-group-title="Games"
        >
          <div
            data-role="tile"
            data-cover="../assets/images/Battlefield_4_Icon.png"
          >
            <span class="branding-bar">Battlefield 4</span>
          </div>
          <div data-role="tile" class="bg-green">
            <img src="../assets/images/x-box.png" class="icon" />
            <span class="branding-bar">XBOX ONE</span>
          </div>
          <div
            data-role="tile"
            data-size="wide"
            data-cover="../assets/images/x-box.png"
          >
            <span class="branding-bar">XBOX LIVE</span>
            <span class="badge-top">5</span>
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

      this.$refs.divGenres.querySelector(".tiles-area").css({
        width: this.tileAreaWidth,
      });

      // eslint-disable-next-line
      if (width > Metro.media_sizes.LD) {
        this.$refs.divGenres.querySelectorAll(".start-screen").css({
          overflow: "auto",
        });
      }
    },
  },
};
</script>
<style>
.start-screen {
  min-width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 20px;
}
.start-screen-title {
  position: fixed;
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
</style>