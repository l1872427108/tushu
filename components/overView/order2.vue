<template>
  <div>
    <div class="order2" v-show="indexId == sign">
      <div class="intro">
        <div class="synopsis-content">
          <p style="margin-left: 28px">
            <span
              class="el-icon-user-solid
"
              style="font-size: 24px; color: #000000"
              >馆长寄语</span
            >
          </p>
          <p class="contentText">
            历经三年的建设，新图书馆拨地而起，在密林环绕间更显神气秀美。随着学校喜迁新校区，图书馆迎来了她与读者见面的第一个学期。图书馆全体工作人员欢迎大家来到图书馆，我们期待着与莘莘学子共同寻求人生哲理、探索科学世界的奥妙。
          </p>

          <p class="contentText">
            “林海绿涛，人类生存的保障；书海页帆，社会发展的翅膀”，图书馆被誉为大学的“心脏”，知识的海洋，智慧的源泉，是文献信息的汇集地，是先进文化的传承地，是学术研究的创新地。
          </p>
          <p class="contentText">
            这里馆舍宽敞，环境幽雅，您可以涤荡尘埃消解烦恼，款步徜徉精神的乐土，也可以躲避城市之喧嚣，寻求静谧之所在；这里儒贤齐聚，学友云集，您可以邂逅志同道合之友，感受心灵相惜的可贵，也可以探求真理之光芒，感悟人生之璀璨；这里书香四溢，资源丰富，您可以尽情品书卷之余香，与古今中外名家神交，也可以心旷神怡涌文思，撰写华彩之乐章。
          </p>
          <p class="contentText">
            作为一所新建图书馆，我们的文献资源可能还不够丰富，我们的服务可能还不够完善，但“读者第一，服务至上”是我们每个图书馆工作人员的心声。我们将竭诚为广大读者提供丰富的资源和优质的服务。随着图书回溯建库的逐步完成，文献资源的不断扩充，服务能力的不断提高，相信图书馆的魅力会更加迷人。
          </p>
          <p class="contentText">
            图书馆愿成为同学们攀登“书山”的阶梯和遨游“学海”的舟楫，成为您求学路上读书思辨之佳所，修身养性之益友。我们真诚地希望您给予图书馆关注、理解和支持，对图书馆的工作提出宝贵的意见和建议，以便我们改进工作、完善服务，与您共同进步。让我们共同努力，追随学校的培养应用型技术人才的理想，一同“探索、追问、思考”，衷心祝愿大家在山西应用科技学院的学习生活能成为人生中浓墨重彩的一笔，在求知的道路上快乐成长，成果丰硕！
          </p>
          <p class="contentText">
            顺请遵守图书馆的规章制度，严禁烟火，保持安静，爱护书刊和公物。欢迎常回家看看，守护我们共同的精神家园！
          </p>
          <p style="text-align:right" class="contentText">
            2020年6月
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
      indexId: "2"
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
.order2 {
  .intro {
    .synopsis-content {
      margin-top: 30px;
      .contentText {
        margin: 10px 0;
        margin-left: 28px;
        padding: 0 20px;
        text-indent: 2em;
        line-height: 32px;
        font-size: 18px;
        letter-spacing: 0.5px;
        color: #000;
        // font-family: FangSong_GB2312, 仿宋;
      }
    }
  }
}
</style>
