<template>
  <div>
    <section class="library_Sc">
      <div class="title_area">
        <div class="title_back">LIBRARY SCENERY</div>
        <div class="title_txt">图书馆风貌</div>
      </div>
      <div class="library_connent">
        <vue-seamless-scroll
          :data="bottomBanner"
          :class-option="classOption"
          class="warp"
        >
          <ul class="ul-item">
            <li
              class="li-item"
              v-for="(item, index) in bottomBanner"
              :key="index"
            >
              <img
                :src="item.departmentUrl"
                :alt="item.name"
                :title="item.name"
              />
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    bottomBanner: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      classOption: {
        direction: 3,
        step: 1.5
      }
    };
  }
};
</script>
<style lang="less" scoped>
.library_Sc {
  .title_area {
    font-size: 32px;
    color: #ff6600;
    line-height: 67px;
    font-family: Gilroy Semi Bold, -apple-system, BlinkMacSystemFont, Segoe UI,
      PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
      Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    text-align: center;
    .title_back {
      position: relative;
      display: inline-block;
      top: 67px;
      font-size: 50px;
      font-weight: 700;
      color: #1f2329;
      opacity: 0.04;
      letter-spacing: 20px;
      -webkit-box-shadow: 0 11px 8px #7e8b9e;
      box-shadow: 0 11px 8px #7e8b9e;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      pointer-events: none;
    }
    .title_txt {
      font-weight: 600;
      letter-spacing: 4px;
    }
  }
  .library_connent {
    width: 100%;
    margin-top: 30px;
    .warp {
      width: 100%;
      height: 300px;
      margin: 0 auto;
      overflow: hidden;
      ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        background-color: rgb(209, 209, 209);
        &.ul-item {
          display: flex;
          .li-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 250px;
            margin-right: 10px;
            line-height: 120px;
            color: #fff;
            font-size: 30px;

            img {
              width: 100%;
              max-height: 230px;
            }
          }
        }
      }
    }
  }
}
</style>
