<template>
  <div class="dFooterArea">
    <div class="footer">
      <div class="mask">
        <dl>
          <dt class="strong">
            <a href="javascript:;" style="color: black">底部导航</a>
          </dt>
          <dd>
            <nuxt-link to="/overview" target="_blank">图书馆概况</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/fingerpost" target="_blank">入馆指南</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/resources" target="_blank">数字资源</nuxt-link>
          </dd>
        </dl>
        <dl>
          <dt class="strong">
            <a href="javascript:;" style="color: black">友情链接</a>
          </dt>
          <dd>
            <a href="http://www.nlc.cn/" target="_blank">中国国家图书馆</a>
          </dd>
          <dd><a href="http://lib.sx.cn/" target="_blank">山西省图书馆</a></dd>
          <dd>
            <a href="https://yz.chsi.com.cn/" target="_blank"
              >中国研究生招生信息网</a
            >
          </dd>
        </dl>
        <dl>
          <dt class="strong">
            <a href="javascript:;" style="color: black">校区</a>
          </dt>
          <dd>
            <a href="https://tieba.baidu.com/p/5027081026?red_tag=1144656740"
              >南校区</a
            >
          </dd>
          <dd><a href="http://www.sxxh.org">新校区</a></dd>
        </dl>
        <dl class="contact">
          <dt class="strong"><a href="javascript:;">联系我们</a></dt>
          <p class="phone" style="font-weight: 600">400-100-5678</p>
          <a
            href="https://weibo.com/astsxc?is_all=1"
            target="_blank"
            ;
            class="iconfont icon-weibo"
          ></a>
          <el-popover placement="bottom" trigger="hover">
            <img
              src="https://gw.pugetd.com/2020/10/08/e3f8f6e88ea2452784b634a51159e242foot_wei.png"
              alt="图书馆二维码"
              style="width: 120px"
            />
            <span class="iconfont icon-weixin" slot="reference"></span>
          </el-popover>
        </dl>
      </div>
    </div>
    <div class="mod_copyright">
      <div class="copyright">
        地址：山西省太原市山西应用科技学院-图书馆 邮编：000003
        电话：400-0351-181
        <br /><span class="encourage"
          >普歌计算机研发中心政务事业群提供技术支持</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.dFooterArea {
  width: 100%;
  height: 355px;
  margin: 0 auto;
  margin-top: 50px;
  a {
    color: #000;
  }

  .footer {
    position: relative;
    width: 100%;
    height: 78%;
    margin: 0 auto 20px;
    background: url("../../assets/image/home/home_background.jpg") bottom
      no-repeat;
  }

  .mask {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 10px;
    /* filter: alpha(opacity=50); */
  }
  .footer::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: peachpuff;
  }
  dl {
    height: 200px;
    text-align: center;
    flex: 1;
    margin: 0 auto;
    opacity: 0.7;
    border-right: 0.1px solid rgb(0, 0, 0, 0.3);
  }

  .strong a {
    height: 17.33px;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.25;
    margin: -1px 0 26px;
    cursor: pointer;
  }

  dd {
    width: 165px;
    height: 30px;
    padding: 30px 0;
    line-height: 30px;
    margin: 0 auto;
    font-size: 15px;
    font-weight: 600;
    color: #000;
    cursor: pointer;
  }

  a:hover {
    color: #aa0003;
  }

  .contact {
    float: left;
    flex: 1;
    text-align: center;
    border-right: none;
  }

  .contact p {
    font-weight: 700;
    margin-top: 33px;
  }

  .contact img {
    width: 250px;
    height: 204px;
  }

  .phone {
    font-size: 22px;
    line-height: 1;
    color: #000;
  }
  em {
    font-style: normal;
    text-decoration: none;
  }

  .icon-weixin {
    position: absolute;
    left: 88%;
    top: -24px;
    margin-top: 10%;
    font-size: 30px;
    color: #09bb07;
    margin-right: 50px;
  }

  .icon-weibo {
    position: absolute;
    right: 4%;
    top: -24px;
    margin-top: 10%;
    color: #e6162d !important;
    margin-right: 10%;
    margin-top: 10%;
    font-size: 30px;
  }
  .code {
    width: 100px;
    height: 100px;
    margin-top: 10px;
  }

  .mod_copyright {
    width: 100%;
    padding: 20px 0 20px 0;
    text-align: center;
    background-color: #ff6332;
    margin: -20px auto;
  }
  .mod_copyright .encourage {
    display: inline-block;
    padding-top: 10px;
  }
  .copyright {
    color: #fff;
    line-height: 20px;
    font-size: 14px;
    margin: auto;
    font-size: 12px;
  }
}
</style>
