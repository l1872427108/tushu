<template>
  <div>
    <div class="container">
      <div class="school-news">
        <div v-if="newsContent.id" id="article_title">
          <h1 class="title">{{ newsContent.newsName }}</h1>
          <div class="time-view">
            <span class="time el-icon-time">{{
              newsContent.gmtCreate | forData
            }}</span>
            <span class="el-icon-view">{{ newsContent.count + 1 }}</span>
          </div>
          <p id="create-name">
            <span>发布者:{{ newsContent.newsCreateName }}</span>
          </p>
        </div>
        <el-divider></el-divider>
        <div id="article_content">
          <p v-html="newsContent.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { forData } from "../../utils/forData";
export default {
  validate({ params }) {
    return /^\d{1,}$/.test(params.id);
  },
  layout: "seconed",
  head() {
    return {
      title: this.newsContent.newsName // 浏览器中的标题
    };
  },
  data() {
    return {
      newsId: "",
      newsContent: {}
    };
  },
  created() {
    this.newsId = this.$route.params.id;
  },
  mounted() {
    this.$nextTick(() => {
      this.newsShow();
    });
  },
  filters: {
    forData: forData
  },
  methods: {
    newsShow() {
      this.$nuxt.$loading.start();
      this.$journaNews(this.newsId)
        .then(res => {
          this.newsContent = res.libraryNewsVo;
        })
        .catch(err => {
          this.$message.closeAll();
          this.$message.error("请求失败,请检查网络是否畅通");
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    }
  }
};
</script>
<style lang="less" scoped>
.el-breadcrumb {
  margin-top: 20px;
  font-size: 15px;
  margin-left: 152px;
}
.container {
  width: 1230px;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 1px;
  border-top: none;
  .school-news {
    width: 100%;
    #article_title {
      #create-name {
        span {
          margin-left: 3px;
          letter-spacing: 2px;
          font-size: 19px;
          font-family: 仿宋, 楷体, 宋体, FangSong_GB2312;
          font-weight: 600;
        }
        margin-top: 10px;
        font-size: 16px;
        text-align: right;
      }
      border-left: 10px #f7ab00 solid;
      border-radius: 10px 0 0 10px;
      padding: 10px 20px;
      h1 {
        font-size: 30px;
        line-height: 60px;
        padding-bottom: 7px;
        font-weight: 500;
        letter-spacing: 2px;
        color: #000;
      }
      .time-view {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 14px;
        color: #919797;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: 8px 20px;
        span {
          font-weight: 600;
          letter-spacing: 1px;
        }
      }
    }
    #article_content {
      overflow: hidden;
      p {
        font-size: 20px;
        padding-bottom: 29px;
        line-height: 1.6;
        color: #333333;
        font-family: 仿宋, 楷体, 宋体, FangSong_GB2312;
        // font-weight: 300;
      }
    }
  }
}
</style>
