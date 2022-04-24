<template>
  <div>
    <div v-show="indexId == sign" style="text-align:center">
      <img src="../../assets/image/survey/sruvey_distribute.png" alt="分布" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexId: "6"
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

<style lang="less" scoped></style>
