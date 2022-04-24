<template>
  <div class="fingerpost">
    <el-row class="container">
      <!-- 左侧 -->
      <el-col :span="24">
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
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Order1 from "../../components/fingerpost/order1.vue";
import Order2 from "../../components/fingerpost/order2.vue";
import Order3 from "../../components/fingerpost/order3.vue";
export default {
  components: { Order1, Order2, Order3 },
  layout: "seconed",
  data() {
    return {
      defaultIndex: "1",
      categoryList: [
        { id: "1", name: "入馆教育" },
        { id: "2", name: "检索指南" },
        { id: "3", name: "咨询服务" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.fingerpost {
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
