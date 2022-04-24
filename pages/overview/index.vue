<template>
  <div class="overView">
    <el-row class="container">
      <!-- 左侧 -->
      <el-col :span="24">
        <el-divider content-position="center">图书馆概况</el-divider>
        <el-tabs v-model="defaultIndex" tab-position="left">
          <el-tab-pane
            v-for="(item, index) in categoryList"
            :key="index"
            :label="item.name"
            :name="item.id"
          >
            <order-1 :sign="item.id"></order-1>
            <order-2 :sign="item.id"></order-2>
            <order-3 :sign="item.id"></order-3>
            <order-4 :sign="item.id"></order-4>
            <order-5 :sign="item.id"></order-5>
            <order-6 :sign="item.id"></order-6>
            <order-7 :sign="item.id"></order-7>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import order1 from "../../components/overView/order1.vue";
import Order2 from "../../components/overView/order2.vue";
import Order3 from "../../components/overView/order3.vue";
import Order4 from "../../components/overView/order4.vue";
import Order5 from "../../components/overView/order5.vue";
import Order6 from "../../components/overView/order6.vue";
import Order7 from "../../components/overView/order7.vue";
export default {
  components: { order1, Order2, Order3, Order4, Order5, Order6, Order7 },
  layout: "seconed",
  data() {
    return {
      defaultIndex: "1",
      categoryList: [
        { id: "1", name: "本馆简介" },
        { id: "2", name: "馆长寄语" },
        { id: "3", name: "机构设置" },
        { id: "4", name: "入馆须知" },
        { id: "5", name: "开放时间" },
        { id: "6", name: "馆藏分布" },
        { id: "7", name: "借阅规则" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.overView {
  .container {
    width: 1230px;
    margin: 0 auto;
    margin-top: 20px;
  }
  /deep/ .el-divider__text,
  .el-link {
    font-size: 25px;
  }
  /deep/ .el-tabs__item {
    height: 43px;
    line-height: 43px;
    border-radius: 5px;
    font-size: 16px;
    padding: 2px 57px;
    margin-right: 5px;
  }
  /deep/ .el-tabs__item.is-active {
    background-color: #ff7b32;
    color: #fff;
  }
}
</style>
