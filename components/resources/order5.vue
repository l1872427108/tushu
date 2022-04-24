<template>
  <div>
    <div class="order5" v-show="indexId == sign">
      <div class="content">
        <img
          src="../../assets/image/figure/figure_video.png"
          width="100%"
          alt="视频资源"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexId: "5"
    };
  },
  props: {
    sign: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="less" scoped>
.order5 {
  .content {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
