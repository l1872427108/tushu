<template>
  <!-- 友情链接 -->
  <div class="friendResource">
    <div class="friendLink">
      <span class="el-icon-link frinend-link">友情链接</span>
    </div>
    <div class="links">
      <ul>
        <li v-for="(items, index) in friendLinkList" :key="index">
          <a :href="items.pricurl" target="_blank" :title="items.linksName">
            <img v-lazy="items.linksUrl" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friendLinkList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.friendResource {
  flex: 1;
  margin-left: 20px;
  height: 450px;
  box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  border-radius: 10px;
  .friendLink {
    width: 100%;
    height: 45px;
    background-color: #dedede;
    padding-left: 60px;
    font-size: 20px;
    line-height: 45px;
    color: #ff6600;
    position: relative;
    border-radius: 10px 10px 0 0;
    span {
      font-weight: 700;
    }
  }

  .links {
    width: 95%;
    height: 380px;
    margin: 10px auto;
    overflow: hidden;
    text-align: center;
    ul {
      height: 100%;
      padding: 10px;
      // column-count: 3;
      // column-gap: 0;
      // overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      li {
        height: 15%;
        margin: 6px;
        img {
          height: 100%;
          // height: 24%;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
