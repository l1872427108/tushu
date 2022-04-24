<template>
  <div>
    <div class="container">
      <div class="news">
        <el-page-header @back="goBack" content="更多综合新闻"> </el-page-header>
        <div class="new-list">
          <ul>
            <li v-for="item in newsList" :key="item.id">
              <nuxt-link
                :to="{
                  name: 'news-id',
                  params: { id: item.id }
                }"
                target="_blank"
              >
                <span class="title"> {{ item.newsName }}</span>
                <span class="new-time"> {{ item.gmtModified }} </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="block">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="current"
          @size-change="handleSizeChange"
          :page-size="limit"
          :page-sizes="[4, 6, 8, 10]"
          layout="total,sizes,prev, pager, next ,jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 1,
      limit: 4,
      total: 0,
      newsList: [],
      active: "news"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.contentNews();
    });
  },
  methods: {
    goBack() {
      window.history.back();
    },
    //请求新闻
    contentNews() {
      this.$nuxt.$loading.start();
      this.$newShow(this.current, this.limit)
        .then(res => {
          this.total = Number(res.total);
          this.newsList = res.records;
        })
        .catch(err => {
          this.$message.closeAll();
          this.$message.error("顶部轮播请求失败,请检查网络是否畅通");
        })
        .finally(() => {
          this.$nuxt.$loading.finish();
        });
    },
    handleCurrentChange(val) {
      this.current = val;
      this.contentNews();
    },
    /**
     * 控制每页显示多少条数据
     */
    handleSizeChange(val) {
      this.limit = val;
      this.contentNews();
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1230px;
  margin: 0 auto;
  .block {
    margin-top: 30px;
    .el-pagination {
      text-align: center;
    }
  }
  .news {
    margin-top: 25px;
    .new-list {
      margin-top: 30px;
      //   color: #000000;
      font-weight: 300;
      ul {
        li {
          cursor: pointer;
          padding-left: 55px;
          height: 40px;
          line-height: 40px;
          border-bottom: 2px dotted #f1a818;
          transition: all 0.2s;
          .title {
            font-size: 17px;
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
          }
          &:hover {
            background-color: #fbecc6;
            a {
              color: #000;
            }
          }
          .new-time {
            float: right;
            padding-right: 55px;
            font-size: 15px;
            color: #000000;
            font-weight: 200;
          }
        }
      }
    }
  }
}
</style>
