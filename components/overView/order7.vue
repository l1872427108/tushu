<template>
  <div>
    <div class="order7" v-show="indexId == sign">
      <div class="content">
        <h3>借阅规则</h3>
        <p class="title el-icon-star-on ">借阅证管理规定</p>
        <p class="contentText">1. 新办借阅证</p>
        <p class="contentItem">1) 新进教职工以部门为单位统一办理。</p>
        <p class="contentItem">2) 新生以学院为单位统一办理。</p>
        <p class="contentItem">
          3) 需提交资料：姓名、部门/院系班级、学号、1寸红底照片。
        </p>
        <p class="contentText">2. 挂失与补办</p>
        <p class="contentItem">
          1)
          借阅证要妥善保管，丢失应及时到图书馆各阅览室办理挂失手续，挂失前造成的损失由读者自行承担。
        </p>
        <p class="contentItem">2) 补办借阅证需持本人工作证、学生证。</p>
        <p class="contentItem">3) 补办借阅证需交工本费10元。</p>
        <p class="contentText">
          3. 借阅证仅限本人使用，教工离职或学生毕业须还清所借书刊，方能离校。
        </p>
        <p class="contentText">
          4. 借阅证办理地点：图书馆办公室 集中取办证时间：每周二下午2:00～5:00
        </p>
        <p class="title el-icon-star-on ">借阅规则</p>
        <p class="contentText">
          1.
          在借阅图书前要仔细检查，如有缺页、污损、登录号（每册书有一个登录号）破损等情况，应及时向工作人员声明，并加盖印记，以分清责任。
        </p>
        <p class="contentText">
          2.
          读者必须爱护书刊，妥善保管，不得污损，防止遗失。如有损毁遗失，应及时申明，并按照《图书、资料损毁遗失赔偿规定》办理赔偿手续。
        </p>
        <p class="contentText">
          3.
          请持本人借阅证和所选图书到管理台，等待办理完借阅手续后，从入口处专用通道出来，取回已借阅图书和借书证，方可离开。
        </p>
        <p class="contentText">
          4.
          读者应按以下规定数量借阅图书，并在规定期限归还图书。如需继续借阅请提前办理续借手续。
        </p>
        <p class="contentText">5. 珍贵书籍不外借，请到各阅览室查阅。</p>
        <p class="title el-icon-star-on ">图书、资料损毁和遗失赔偿管理制度</p>
        <p class="contentText">
          1.
          读者必须爱护所借书刊，妥善保管。如有损毁遗失，应在一个月内及时申明,办理有关赔偿手续，如果超期办理要按超期天数加收超期费。
        </p>
        <p class="contentText">
          2.
          读者损毁书刊（如批点、涂改、卷折、影描、污损等），程度较轻不影响内容完整者，应赔偿1~5元；如损毁程度较严重，必须加工整修才能继续流通者，应赔偿6~15元。
        </p>
        <p class="contentText">
          3.
          读者严重污损（包括剪裁、撕割）或遗失书刊，应在一个月内以原书的相同版本或经本馆同意的版本赔偿，否则按下列规定折付赔偿费：
        </p>
        <p class="contentItem">
          1) 参考价值一般，但添购困难的中文图书单卷本，按原价的5倍赔偿；
        </p>
        <p class="contentItem">
          2) 参考价值较大的中文图书单卷本和其它图书按下表赔偿：
        </p>
        <p class="contentItem">
          说明:“多卷本”指包含两册和两册以上的图书、丛书和报刊。遗失或损毁其中的一册（期）或数册（期），按整套书刊定价的以上倍数计算赔偿金额。
        </p>
        <p class="contentItem">3) 线装图书按原价40倍赔偿。</p>
        <p class="contentText">
          4.
          凡借出的书刊，未经本馆同意，不得私自拆散，否则除付平装本20元、精装本30元的装订费外，一律赔偿50元。
        </p>
        <p class="contentText">
          5.
          遗失书刊已赔款，在本年度内找到原书时，可将原书刊交还本馆，凭原赔偿收据退款，但要交纳适当的超期费。
        </p>
        <p class="contentText">
          6.
          凡拒绝赔偿者，除停止其借阅外，同时通知有关部门从本人工资或助学金、奖学金中扣除，或离校时不予办理离校手续，直到按规定处理为止。
        </p>
        <p class="title el-icon-star-on ">期刊阅览室管理制度</p>
        <p class="contentText">
          1.
          本阅览室仅对我校全体师生开放；请自觉遵守图书馆管理条例，服从工作人员管理，做文明读者；
        </p>
        <p class="contentText">
          2.
          凡进入阅览室的读者，须持本人在本馆的借阅证经值班人员验证后，方可进入阅览室；
        </p>
        <p class="contentText">3. 读者不得带任何书籍和书包等物品进入阅览室；</p>
        <p class="contentText">
          4.
          阅览室是文明的学习场所，读者应自觉保持阅览室的整洁、安静，不得在室内吃东西、乱丢纸屑、大声喧哗，不准抢占座位及随意搬动桌椅，不得在阅览室内拨打或接听手机；
        </p>
        <p class="contentText">
          5.
          读者进入本阅览室必须用借阅证换取代书板，离开阅览室时交回代书板，换回借阅证；
        </p>
        <p class="contentText">
          6.
          为防止报刊乱架，每位读者一次仅限取一本期刊或一份报纸，并必须将代书板放入所取阅的位置，且不准损坏和撕毁、裁剪期刊，一经发现，按《图书、资料损坏赔偿条例》处理；阅读完毕后必须把书放回到原来的位置，取回代书板；
        </p>
        <p class="contentText">
          7.
          如果需要复印，必须征得管理员登记，并以借阅证为抵押，复印结束，必须当天还回，并换回借阅证。
        </p>
        <p class="contentText">
          8.
          本阅览室陈列的各种报刊只限在室内阅读，概不外借，更不准私自带出本阅览室外；有意藏匿报刊或未办理手续擅自将报刊带出阅览室者，以窃书论处；
        </p>
        <p class="contentText">9. 离开座位时，要轻轻将阅览椅放回阅览桌下；</p>
        <p class="contentText">
          10.经出口通道时，如遇监测器报警，有关人员应主动接受值班工作人员检查，不应有不文明礼貌的言行。
        </p>
        <p class="title el-icon-star-on ">图书阅览室管理制度</p>
        <p class="contentText">
          1.
          本阅览室仅对我校全体师生开放；请自觉遵守图书馆管理条例，服从工作人员管理，做文明读者；
        </p>
        <p class="contentText">
          2.
          凡进入阅览室的读者，须持本人在本馆的借阅证经值班人员验证后，方可进入阅览室；
        </p>
        <p class="contentText">3. 读者不得带任何书籍和书包等物品进入阅览室；</p>
        <p class="contentText">
          4.
          阅览室是文明的学习场所，读者应自觉保持阅览室的整洁、安静，不得在室内吃东西、乱丢纸屑、大声喧哗，不准抢占座位及随意搬动桌椅，不得在阅览室内拨打或接听手机；
        </p>
        <p class="contentText">
          5.
          为防止图书乱架，所有读者阅读完书后必须把书放到指定的图书归还处，不要私自上架或随便乱放；
        </p>
        <p class="contentText">6. 离开座位时，要轻轻将阅览椅放回阅览桌下；</p>
        <p class="contentText">
          7. 如需借、还图书请持本人借阅证到管理台办理借、还手续；
        </p>
        <p class="contentText">
          8.
          经出口通道时，如遇监测器报警，有关人员应主动接受值班工作人员检查，不应有不文明礼貌的言行；
        </p>
        <p class="contentText">
          9.
          有意在阅览场所藏匿图书或未办理手续擅自将图书带出阅览室者，以窃书论处；
        </p>
        <p class="contentText">
          10.
          发现读者对图书有污损、撕页、剪裁等情形，按《图书、资料损坏赔偿条例》处理。
        </p>
        <p class="title el-icon-star-on ">自习室管理规定</p>
        <p class="contentText">
          图书馆自习室是供全校学生自主学习的公共区域。为创造良好的自习环境，维护自习室的正常秩序，保障我校学生平等使用自习室的权利，特制定本规定。
        </p>
        <p class="contentText">
          1. 本室仅供本校读者使用，使用者必须持本人借阅证；
        </p>
        <p class="contentText">
          2.
          为保证自习室有效使用，要求自习者先来先坐、人走座空。严禁抢占、代占座位，不得粘贴占座标识；
        </p>
        <p class="contentText">
          3.
          暂时离开座位者，须在座位桌面用纸条留下真实的离开时间，可保留座位30分钟。未留纸条或离开座位超过30分钟者按占座处理，管理人员将不定期对抢占、代占座位现象进行清理。凡有空座位，其他自习者均有权使用。因占座问题发生纠纷，由工作人员调解，对占座一方提出严肃批评，对于屡次占座位者视情节给予停止使用权一定期限的处理。
        </p>
        <p class="contentText">
          4.
          注意公私财物安全和人身安全。每天下班后管理人员将对遗留在自习室（包括地面、窗台）的个人物品视为废弃物予以清理，如有财物遗失由物主本人负责。
        </p>
        <p class="contentText">
          5.
          不损坏自习室设备，不擅自改变自习室布局，不自带非自习必须的私人用品进入自习区。
        </p>
        <p class="contentText">
          6.
          不准擅接电源、违规使用电器。严禁携带易燃易爆品和管制刀具进入自习区。发生个人纠纷找管理人员调解，或向所属院部、单位或保卫部门反映，按正当途径处理，严禁吵骂斗殴。管理人员要对各楼层自习室进行巡查，发现问题及时处理或汇报。
        </p>
        <p class="contentText">
          7.
          对违反上述规定、不服从管理者，本馆将记录在案并给予口头批评教育、书面公开通报等。情节严重者，通告校相关部门，按学校有关管理规定予以处分。对屡教不改者予以注销图书借阅证一年的处理。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexId: "7"
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
      font-family: FangSong_GB2312, 仿宋;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 18px;
      font-family: 黑体;
      color: #000;
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
