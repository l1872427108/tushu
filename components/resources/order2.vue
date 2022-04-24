<template>
  <div>
    <div class="order2" v-show="indexId == sign">
      <div class="intro">
        <div class="synopsis-content">
          <p style="margin-left: 28px;text-align:center">
            <span style="font-size: 30px;">专业数据库</span>
          </p>
          <!-- 专业数据库 -->
          <p class="title">MeTeL高校课程资料库</p>

          <section>
            <p class="contentItem">
              1.
              <a href="http://www.metel.cn/" target="_blank">访问地址</a>
            </p>
            <p class="contentItem">
              2.
              <a
                href="http://6061627.s21d-6.faiusrd.com/64/ABUIABBAGAAg9__8uAUojOrWsgI.doc"
                target="_blank"
                >MeTeL高校课程资料库资源介绍</a
              >
            </p>
            <p class="contentItem">
              3.
              <a
                href="http://6061627.s21d-6.faiusrd.com/66/ABUIABBCGAAgkvC8uAUouL7daw"
                target="_blank"
                >MeTeL使用指南</a
              >
            </p>
            <p class="contentItem">
              4. 校园网IP范围内均可使用
            </p>
          </section>
          <p class="title">SpecialSci数据库</p>
          <section class="flex_sc">
            <div>
              <p class="contentItem">
                1.
                <a href="http://www.specialsci.cn/" target="_blank">访问方式</a>
              </p>
              <p class="contentItem">
                2.
                <a
                  href="http://6061627.s21d-6.faiusrd.com/64/ABUIABBAGAAglPC8uAUoza2AtQQ.doc"
                  target="_blank"
                  >SpecialSci数据库资源介绍</a
                >
              </p>
              <p class="contentItem">
                3.
                <a
                  href="http://6061627.s21d-6.faiusrd.com/66/ABUIABBCGAAgrfC8uAUouN2dggU"
                  target="_blank"
                  >SpecialSci使用指南</a
                >
              </p>
              <p class="contentItem">
                4. 校园网IP终端内访问
              </p>
            </div>
          </section>
          <p class="title">Emerald管理学全集数据库</p>

          <section class="flex_sc">
            <div>
              <p class="contentItem">
                1.
                <a href="http://www.emeraldinsight.com/" target="_blank"
                  >访问方式</a
                >
              </p>
              <p class="contentItem">
                2.资源简介：Emerald出版社（原名MCB UP
                Ltd）于1967年由来自世界著名百强商学院之一的布拉德福商学院（Bradford
                University Management
                Center）的学者建立。从出版唯一一本期刊开始，到至今成为世界管理学期刊最大的出版社之一的40多年间，Emerald一直致力于管理学、图书馆学、工程学专家评审期刊的出版。从建社以来，Emerald一直秉承理论联系实际并应用于实践的出版理念，有效搭起了学术界和实践人士之间的桥梁，这一点可以从Emerald的用户和稿源得到印证。总部位于英国，但所有期刊的主编、作者遍布世界各地，并且在美国、马来西亚、印度、中国、澳大利亚、日本、迪拜等地建立了代表处，使Emerald成为真正意义的国际化出版机构之一。
                >
              </p>
              <p class="contentItem">
                3.
                <a
                  href="http://6061627.s21d-6.faiusrd.com/66/ABUIABBCGAAgrfC8uAUouN2dggU"
                  target="_blank"
                  >SpecialSci使用指南</a
                >
              </p>
              <p class="contentItem">
                4. 校园网IP终端内访问
              </p>
            </div>
          </section>
          <p style="margin-left: 28px;text-align:center">
            <span style="font-size: 30px;">共享资源</span>
          </p>
          <section class="flex_sc">
            <div>
              <p class="contentText">OA资源检索服务平台</p>
              <p class="contentItem">
                1.
                <a href="http://www.socolar.com/" target="_blank">访问方式</a>
              </p>
            </div>
          </section>
          <section class="flex_sc">
            <div>
              <p class="contentText">汉斯开源国际学术期刊</p>
              <p class="contentItem">
                1.
                <a href="http://www.hanspub.org/" target="_blank">访问方式</a>
              </p>
            </div>
          </section>
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
      padding: 0 60px;
      .title {
        text-align: left;
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 18px;
        color: #cc0000;
        font-family: FangSong_GB2312, 仿宋;
      }
      .contentText {
        text-align: left;
        margin: 5px 0;
        padding: 0 15px;
        line-height: 32px;
        font-size: 20px;
        letter-spacing: 0.5px;
        color: #000;
        font-family: FangSong_GB2312, 仿宋;
      }
      .contentItem {
        text-align: left;
        margin: 5px 0;
        text-indent: 2em;
        line-height: 32px;
        font-size: 20px;
        letter-spacing: 0.5px;
        color: #000;
        font-family: FangSong_GB2312, 仿宋;
      }
      a {
        color: blue;
        text-decoration: underline;
        font-size: 20px;
      }
    }
  }
}
</style>
