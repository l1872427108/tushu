<template>
  <div>
    <div class="order7" v-show="indexId == sign">
      <div class="content">
        <h3>检索指南</h3>
        <p class="title el-icon-s-promotion">
          馆藏文献信息检索须知
        </p>
        <p class="contentText">1. 新办借阅证</p>
        <p class="contentItem">1) 新进教职工以部门为单位统一办理。</p>
        <p class="contentItem">2) 新生以学院为单位统一办理。</p>
        <p class="contentItem">
          3) 需提交资料：姓名、部门/院系班级、学号、1寸红底照片。
        </p>
        <p class="contentText">一、纸质文献资源检索</p>

        <p class="contentText">1、通过检索机检索</p>

        <p class="contentText">
          “公共查询系统”是图书馆提供给广大读者的通过公用设备对图书馆内图书、期刊等书目的相关信息及读者的外借信息进行查询的公用系统。
        </p>
        <p class="title2 el-icon-s-promotion">馆藏书目检索</p>
        <p class="contentItem">
          打开“公共查询系统”，
          打开“公共查询系统”，首先选择要检索的数据库，如：“中文图书”或“中文期刊”，在条件选择窗口输入所要查询图书或期刊等文献的检索条件，然后点击查询按钮，书目窗口会显示查询到的相关信息，选中该窗口中的某一项，详细数据窗口会显示该项的典藏、流通等方面的详细信息。这2个窗口为只读状态，不可编辑修改。
        </p>
        <p class="contentItem">
          说明：（1）责任方式是指图书的译者、作者或编辑等。
        </p>
        <p class="contentItem">
          （2）在题内关键词组合中，输入任何关键词及组合可以把题名包含你所输的内容都检索出来。例如：在题内关键词输入当代小说，点击“查找”按钮，可以把题名含当代小说的信息检索出来。
        </p>
        <p class="title2 el-icon-s-promotion">读者借还查询</p>
        <p class="contentItem">
          首先，选择“读者外界查询”一栏，正确输入读者借阅证号和密码后点击查询，如果系统确定无误，“姓名”处会显示出该读者姓名，信息栏显示该读者的正在外借文献的信息。
        </p>
        <p class="title2 el-icon-s-promotion">读者密码修改</p>
        <p class="contentItem">
          读者若要修改自己的密码，首先要正确输入自己的借阅证号和未修改之前的密码，经系统确认后，方可有修改密码的权利，选择“修改密码”按钮，会弹出密码修改窗口。两次输入新密码后，点击确认，系统校验两次新密码一致，即可成功更新。
        </p>

        <p class="contentText">2、通过网上检索</p>

        <p class="contentItem">该功能正在开发中……</p>

        <p class="contentText">二、数字资源检索</p>

        <p class="contentItem">请参考各数据库使用指南</p>
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
.order7 {
  .content {
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: 50px;
    h3 {
      text-align: center;
      font-family: 黑体;
      font-size: 29px;
      font-weight: 500;
      color: #000;
    }
    .title {
      text-align: left;
      font-family: 黑体;

      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 18px;
      color: #000;
    }
    .title2 {
      text-align: left;
      font-family: FangSong_GB2312, 仿宋;
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 18px;
      color: #000;
      text-indent: 1em;
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
  }
}
</style>
