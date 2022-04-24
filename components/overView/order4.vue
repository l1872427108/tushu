<template>
  <div>
    <div class="order4" v-show="indexId == sign">
      <div class="content">
        <h3>入馆须知</h3>
        <p class="contentText">1本校读者凭本人借阅证进入图书馆。</p>
        <p class="contentText">
          2讲究文明礼貌。衣着整洁，不准穿短裤、背心、拖鞋等进入图书馆。
        </p>
        <p class="contentText">3随身携带的书籍、书包等物品不得带入阅览室内。</p>
        <p class="contentText">
          4保持安静，请勿喧哗，请将手机置于静音状态，请勿在图书阅览室、报刊阅览室、电子阅览室、自习室拨打或接听手机。
        </p>
        <p class="contentText">
          5文明借阅，不用物品抢占阅览座位，不得随便挪动阅览桌椅。
        </p>
        <p class="contentText">
          6自觉维护保持馆内卫生，严禁随地吐痰、乱扔垃圾；禁止在阅览室、自习室用餐吃零食。未经许可，禁止在馆内张贴、散发广告等宣传品。
        </p>
        <p class="contentText">7自觉爱护书刊报纸，严禁涂抹、撕毁、私藏。</p>
        <p class="contentText">
          8爱护馆内建筑和设施，严禁涂抹刻画和损坏设备，如有损坏，照章赔偿。
        </p>
        <p class="contentText">
          9离开阅览室，如遇检测仪鸣响，请主动配合工作人员检查。
        </p>
        <p class="contentText">
          10图书馆是重点防火单位，严禁随意搬弄消防等有关设施，严禁携带易燃易爆等物品进馆，严禁在馆内吸烟、用火和私自用电。
        </p>
        <p class="contentText">
          11如遇停电等意外情况。保持镇定不慌乱，听从工作人员的指挥安排。
        </p>
        <p class="contentText">
          12图书馆各项规章制度陈列在各阅览室门口，请认真阅读，自觉遵守，相互监督。
        </p>
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
    h3 {
      text-align: center;
      font-family: 黑体;
      font-size: 29px;
      font-weight: 500;
      color: #000;
    }
    .contentText {
      text-align: left;
      margin: 10px 0;
      margin-left: 28px;
      padding: 0 20px;
      text-indent: 2em;
      line-height: 35px;
      font-size: 21px;
      letter-spacing: 0.5px;
      color: #000;
    }
  }
}
</style>
