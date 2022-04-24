<template>
  <!-- 综合新闻模块 -->
  <div class="contents-notice">
    <div class="hotSearch">
      <span class="el-icon-location-information"> 综合新闻</span>
      <nuxt-link to="/news">
        了解更多<i class="el-icon-arrow-right"></i>
      </nuxt-link>
    </div>
    <div class="compositeNews" v-if="newsList.length">
      <ul
        :class="{ 'animate-up': animateUp }"
        @mouseenter="stopFn"
        @mouseleave="startFn"
      >
        <li class="newsList" v-for="items in newsList" :key="items.id">
          <nuxt-link
            :to="{
              name: 'news-id',
              params: { id: items.id }
            }"
            class="article_title"
            target="_blank"
          >
            <span class="newsTitle">
              {{ items.newsName }}
            </span>
            <span class="newsTime">
              {{ items.gmtModified }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsList: {
      type: Array,
      required: true
    },
    animateUp: {
      type: Boolean,
      required: true,
      default: false
    },
    stopFn: {
      type: Function,
      required: true
    },
    startFn: {
      type: Function,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang="less">
.contents-notice {
  width: 600px;
  height: 450px;
  box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  border-radius: 10px;
  .hotSearch {
    width: 100%;
    height: 45px;
    background-color: #dedede;
    padding-left: 60px;
    font-size: 20px;
    line-height: 45px;
    color: #ff6600;
    position: relative;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    span {
      font-weight: 800;
    }
    a {
      float: right;
      font-size: 13px;
      font-weight: 300;
      padding-right: 15px;
    }
  }
  .compositeNews {
    width: 465px;
    height: 380px;
    margin: 10px auto;
    overflow: hidden;
    text-align: center;
    .animate-up {
      transition: all 0.5s ease-in-out;
      transform: translateY(-48px);
    }
    .newsList {
      font-size: 28px;
      text-align: center;
      width: 500px;
      height: 55px;
      line-height: 55px;
      position: relative;
      border-bottom: 2px solid #f0f0f0;
      &:last-child {
        border-bottom: none;
      }
      .article_title {
        width: 500px;
        height: 55px;
        display: inline-block;
        .newsTitle {
          cursor: pointer;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          width: 70%;
          text-align: left;
          height: 55px;
          line-height: 55px;
          &:hover {
            color: #ff6332;
            font-weight: 600;
          }
        }
        .newsTime {
          position: absolute;
          top: 0;
          right: 0;
          color: #999;
          width: 30%;
          font-size: 1px;
        }
      }
    }
  }
}
</style>
