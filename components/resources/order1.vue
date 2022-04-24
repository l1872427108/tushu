<template>
  <div>
    <div class="order1" v-show="indexId == sign">
      <div class="intro">
        <div class="synopsis-content">
          <p style="margin-left: 28px;text-align:center">
            <span style="font-size: 30px; color: red">温馨提示</span>
          </p>
          <p class="contentItem">
            我校电子资源尚处于初级建设阶段，还不能满足大家的需求，以下几种电子资源免费使用方法，可以弥补我校电子资源的不足：
          </p>
          <p class="contentItem">
            1、
            网上实名注册中国国家图书馆，认证后的读者可使用国图共享资源，其中：自建资库44个，商业数据库70个。
            网址：<a href="http://www.nlc.cn/" target="_blank"
              >http://www.nlc.cn/</a
            >
          </p>
          <p class="contentItem">
            2、办理山西省图书馆借阅证，用借阅证登陆省图网站，可免费使用所有资源。
            网址：<a href="http://lib.sx.cn/ " target="_blank"
              >http://lib.sx.cn/
            </a>
          </p>
          <p class="contentItem">
            3、通过摘要等信息确定需要的文件，将所需文件的篇目、作者等信息整理好，随时联系图书馆刘老师，帮您获取资源。
          </p>
          <!-- 专业数据库 -->
          <p class="title">专业数据库</p>
          <section class="flex_sc">
            <div>
              <p class="contentText">中国知网数据库（cnki）</p>
              <p class="contentItem">
                1.
                <a href="http://www.cnki.net/" target="_blank">访问方式</a>
              </p>
              <p class="contentItem">
                2.
                <a href="http://www.sxxh.org/h-nd-j-3314-1.html" target="_blank"
                  >使用指南</a
                >
              </p>
            </div>
            <div>
              <p class="contentText">超星期刊</p>
              <p class="contentItem">
                1.
                <a href="http://qikan.chaoxing.com/" target="_blank"
                  >访问方式</a
                >
              </p>
              <p class="contentItem">
                2.
                <a href="http://www.sxxh.org/h-nd-j-2256-1.html" target="_blank"
                  >资源简介</a
                >
              </p>
            </div>
            <div>
              <p class="contentText">超星移动图书馆</p>
              <p class="contentItem">
                1.
                <a
                  href="http://www.sxxh.org/nd.jsp?id=2122&_jcp=1"
                  target="_blank"
                  >使用指南</a
                >
              </p>
            </div>
          </section>
          <section class="flex_sc">
            <div>
              <p class="contentText">超星云舟学习通</p>
              <p class="contentItem">
                1.
                <a
                  href="http://www.sxxh.org/nd.jsp?id=2205&_jcp=1"
                  target="_blank"
                  >使用指南</a
                >
              </p>
            </div>
            <div>
              <p class="contentText">歌德电子书阅读机</p>
              <p class="contentItem">
                1.
                <a href="http://www.sxxh.org/h-col-568.html" target="_blank"
                  >歌德简介及使用指南</a
                >
              </p>
              <p class="contentItem">
                2. 访问方式：读者请到图书馆二层电子阅读机上下载图书阅读
              </p>
            </div>
            <div>
              <p class="contentText">超星发现系统</p>
              <p class="contentItem">
                1.
                <a href="http://www.chaoxing.com/" target="_blank">访问方式</a>
              </p>
              <p class="contentItem">
                2.
                <a
                  href="http://6061627.s21d-6.faiusrd.com/65/ABUIABBBGAAg6Oy8uAUoiq-AgAc.docx"
                  target="_blank"
                  >资源简介</a
                >
              </p>
              <p class="contentItem">
                3.
                <a href="http://www.sslibrary.com/help/index" target="_blank"
                  >使用指南</a
                >
              </p>
              <p class="contentItem">
                4.
                <a
                  href="http://%20http//www.sslibrary.com/ssreader/download"
                  target="_blank"
                  >超星阅读器下载</a
                >
              </p>
            </div>
          </section>
          <section>
            <p class="contentText">超星汇雅电子书</p>
            <p class="contentItem">
              1.
              <a href="http://www.sslibrary.com" target="_blank">访问地址</a>
            </p>
            <p class="contentItem">
              2.
              <a href="http://172.168.10.131:8081/hyindex.jsp" target="_blank"
                >使用指南</a
              >
            </p>
          </section>
          <p class="title">试用数据库</p>
          <section class="flex_sc">
            <div>
              <p class="contentText">笔杆网（写作与创新平台）</p>
              <p class="contentItem">
                1.
                <a href="http://www.bigan.net/" target="_blank">访问方式</a>
              </p>
              <p class="contentItem">
                2.
                <a
                  href="http://www.sxxh.org/nd.jsp?id=2049&_jcp=1"
                  target="_blank"
                  >产品说明书</a
                >
              </p>
              <p class="contentItem">
                3.
                <a href="http://www.bigan.net/help/" target="_blank"
                  >新手指南</a
                >
              </p>
              <p class="contentItem">
                4. 校园网IP终端内访问
              </p>
            </div>
            <div>
              <p class="contentText">51CTO学院</p>
              <p class="contentItem">
                1.
                <a href="http://www.sxxh.org/unlink" target="_blank"
                  >访问方式</a
                >
              </p>
              <p class="contentItem">
                2.
                <a href="http://www.sxxh.org/h-nd-j-2254-1.html" target="_blank"
                  >资源简介</a
                >
              </p>
            </div>
            <div>
              <p class="contentText">全球案例发现系统</p>
              <p class="contentItem">
                1.
                <a href="http://www.htcases.com/" target="_blank">访问方式</a>
              </p>
              <p class="contentItem">
                2.
                <a href="http://www.sxxh.org/h-nd-j-2255-1.html" target="_blank"
                  >系统简介</a
                >
              </p>
            </div>
          </section>
          <section class="flex_sc">
            <div>
              <p class="contentText">智课英语翻转课堂教学系统</p>
              <p class="contentItem">
                1.
                <a href="http://www.sxxh.org/unlink" target="_blank"
                  >访问方式</a
                >
              </p>
            </div>
            <div>
              <p class="contentText">思想政治课程数据库</p>
              <p class="contentItem">
                1.
                <a href="https://www.sizhengke.net/" target="_blank"
                  >访问方式</a
                >
              </p>
            </div>
          </section>
          <p class="title">共享资源</p>
          <section class="flex_sc">
            <div>
              <p class="contentText">中国国家图书馆</p>
              <p class="contentItem">
                1.
                <a href="http://www.nlc.gov.cn/" target="_blank">访问方式</a>
              </p>
            </div>
            <div>
              <p class="contentText">山西省图书馆</p>
              <p class="contentItem">
                1.
                <a href="http://lib.sx.cn/" target="_blank">访问方式</a>
              </p>
            </div>
            <div>
              <p class="contentText">国家数字文化网</p>
              <p class="contentItem">
                1.
                <a href="http://www.ndcnc.gov.cn/" target="_blank">访问方式</a>
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
      .title {
        text-align: left;
        font-family: 隶书;
        font-size: 32px;
        margin-top: 10px;
        margin-bottom: 18px;
        color: #cc0000;
        font-weight: 900;
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
        padding: 0 15px;
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
      .flex_sc {
        display: flex;
        margin-bottom: 30px;
        div {
          flex: 1;
        }
      }
    }
  }
}
</style>
