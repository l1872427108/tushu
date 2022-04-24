<template>
  <div>
    <div class="order1" v-show="indexId == sign">
      <div class="intro">
        <div class="synopsis-content">
          <p class="contentText">
            每年9-10月，我们都会对大一新同学逐系逐班进行简单的入馆教育，以便新同学能及早地走近图书馆，在大学期间充分利用图书馆的资源，如果您需要进一步的单独地和图书馆工作人员咨询问题，进一步更快、更深层次地了解图书馆，请您联系我们！
          </p>
          <p class="contentText" style="text-align:center">
            联系地址：图书馆办公室
          </p>
          <p class="contentText" style="text-align:center">
            联系电话：0351—7955363
          </p>
          <p class="contentText" style="text-align:center">
            联系邮箱：sxyylib@126.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexId: "1"
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
.order1 {
  .intro {
    .synopsis-content {
      margin-top: 30px;
      .contentText {
        margin: 10px 0;
        margin-left: 28px;
        padding: 0 20px;
        text-indent: 2em;
        line-height: 32px;
        font-size: 22px;
        letter-spacing: 0.5px;
        font-family: FangSong_GB2312, 仿宋;
      }
    }
  }
}
</style>
