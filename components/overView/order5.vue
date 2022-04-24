<template>
  <div>
    <div v-show="indexId == sign" style="text-align:center">
      <img src="../../assets/image/survey/survey_time.png" alt="开放时间" />
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

<style lang="less" scoped></style>
