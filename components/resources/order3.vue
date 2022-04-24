<template>
  <div>
    <div class="order3" v-show="indexId == sign">
      <div class="content">
        <img
          src="../../assets/image/figure/figure_newspaper.png"
          alt="报纸资源"
        />
        <img
          src="../../assets/image/figure/figure_newspaper·2.png"
          alt="报纸资源"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexId: "3"
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
.order3 {
  .content {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
