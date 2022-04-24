<template>
  <!-- 轮播图 -->
  <el-carousel
    class="topBanner"
    :interval="3000"
    type="card"
    height="375px"
    style="margin-top:20px"
  >
    <el-carousel-item v-for="item in topBannerList" :key="item.id">
      <img v-lazy="item.bannerUrl" alt="" height="360" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    topBannerList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
//滚动文字end
.topBanner /deep/ .el-carousel__indicators--outside button {
  background-color: rgba(255, 102, 0, 0.726);
  width: 50px;
  height: 4.5px;
  border-radius: 4.5px;
}
</style>
