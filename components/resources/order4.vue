<template>
  <div>
    <div class="order4" v-show="indexId == sign">
      <div class="content">
        <img
          src="../../assets/image/figure/figure_dictionary.png"
          width="100%"
          alt="词典百科"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexId: "4"
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
.order4 {
  .content {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
