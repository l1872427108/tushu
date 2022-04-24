<template>
  <div class="indexArea">
    <div class="container">
      <scroll-text></scroll-text>
      <top-banner :topBannerList="topBannerList"></top-banner>
      <!-- 综合新闻和友情链接 -->
      <section class="newsNumArea">
        <new-notice
          ref="newNotice"
          :newsList="newsList"
          :animateUp="animateUp"
          :startFn="startFn"
          :stopFn="stopFn"
        ></new-notice>

        <friend-links :friendLinkList="friendLinkList"></friend-links>
      </section>
      <!-- 数字资源区域 -->
      <number-source :numberSource="numberSource"></number-source>
      <!-- 图书官风貌 -->
      <library-scenery :bottomBanner="bottomBanner"></library-scenery>
    </div>
  </div>
</template>

<script>
import FriendLinks from "../components/home/friendLinks.vue";
import LibraryScenery from "../components/home/libraryScenery.vue";
import NewNotice from "../components/home/newNotice.vue";
import NumberSource from "../components/home/numberSource.vue";
import scrollText from "../components/home/scrollText.vue";
import topBanner from "../components/home/topBanner.vue";
export default {
  layout: "default",
  components: {
    scrollText,
    topBanner,
    NewNotice,
    FriendLinks,
    NumberSource,
    LibraryScenery
  },
  data() {
    return {
      //顶部轮播图
      topBannerList: [],
      //新闻查询
      newsList: [],
      timer: null,
      animateUp: false,
      //友情链接
      friendLinkList: [],
      //数字资源
      numberSource: [],
      //底部轮播
      bottomBanner: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getAllData();
      this.getQueryNews();
    });
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    async getAllData() {
      this.$nuxt.$loading.start();
      const apiList = [
        this.$topBanner(),
        this.$friendView(),
        this.$numberSource(),
        this.$bottomroll()
      ];
      await Promise.all(apiList)
        .then(res => {
          if (res.length) {
            this.topBannerList = res[0].BannerList;
            this.friendLinkList = res[1].links;
            this.numberSource = res[2].list;
            this.bottomBanner = res[3].departmentsList;
          }
        })
        .catch(err => {
          this.$message.closeAll();
          this.$message.error("请求失败,请检查网络是否畅通");
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    },

    /**
     * 综合新闻
     */
    // 新闻模块
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.newsList.push(this.newsList[0]);
        this.newsList.shift();
        this.animateUp = false;
      }, 500);
    },
    stopFn() {
      clearInterval(this.timer);
    },
    startFn() {
      this.timer = setInterval(this.scrollAnimate, 2000);
    },
    getQueryNews() {
      this.$nuxt.$loading.start();
      this.$queryNews()
        .then(res => {
          this.newsList = res.list;
          this.startFn();
        })
        .catch(err => {
          this.$message.closeAll();
          this.$message.error("新闻请求失败,请检查网络是否畅通");
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    }
  }
};
</script>

<style lang="less" scoped>
.indexArea {
  .container {
    width: 1230px;
    margin: 0 auto;
    margin-top: 20px;
    .newsNumArea {
      display: flex;
      margin-top: 18px;
    }
  }
}
</style>
