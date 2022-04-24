<template>
  <div>
    <div class="order1" v-show="indexId == sign">
      <div class="intro">
        <div class="synopsis-content">
          <p style="margin-left: 28px">
            <span class="el-icon-s-flag" style="font-size: 24px; color: #000000"
              >咨询服务</span
            >
          </p>

          <p class="contentText">
            为了在图书馆与各院之间建立直接的联系，掌握教学科研工作对文献资料的需求，帮助教师、学生充分了解和利用图书馆的资源，图书馆信息部为各学院师生提供信息咨询服务工作。
          </p>

          <p class="contentText" style="text-align:right">
            联系电话：0351-7955363
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
