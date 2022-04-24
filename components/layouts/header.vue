<template>
  <header class="w">
    <nav class="container">
      <ul style="text-align:center;margin-bottom:20px">
        <img src="../../assets/image/home/home_library.jpg" alt="logo" />
      </ul>
      <div class="tap w">
        <ul class="nav w">
          <li v-for="(item, index) in linkList" :key="index">
            <nuxt-link :to="item.to" target="_blank">{{
              item.title
            }}</nuxt-link>
          </li>
          <li>
            <a href="http://www.sxxh.org/" target="_blank">学校官网</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      linkList: [
        {
          to: "/",
          title: "图书馆首页"
        },
        {
          to: "/overview",
          title: "图书馆概况"
        },
        {
          to: "/fingerpost",
          title: "入馆指南"
        },
        {
          to: "/resources",
          title: "数字资源"
        }
      ]
    };
  },

  methods: {}
};
</script>
<style lang="less" scoped>
.w {
  width: 1230px;
  margin: 0 auto;
  .container {
    width: 100%;
    ul img {
      padding-top: 20px;
      padding-left: 23px;
    }
    .tap {
      width: 1230px;
      height: 50px;
      border-bottom: 2px solid #bc4011;
      z-index: 1111;
      margin: 0 auto;
    }
    .tap .nav {
      display: flex;
    }
    .tap .nav > li {
      flex: 1;
      position: relative;
      float: left;
      height: 48px;
      line-height: 53px;
      text-align: center;
    }

    .nav ul {
      display: none;
    }
    .nav ul li {
      &:hover:ul li {
        height: 200px;
      }
    }
    .nav > li > a {
      text-align: center;
      font-weight: 700;
      color: #ff6332;
      transition: all 0.3s ease-in-out;
    }

    li a:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background-color: #ff7b32;
      z-index: -1;
      transform: scale(0);
      transition: transform 0.3s ease-in-out;
    }
    // .nav li a:visited {
    //   color: #fff;
    // }
    .nav li a:hover {
      color: #fff;
      text-decoration: underline;
    }
    // .nav li a:active {
    //   color: #fff;
    // }

    li a:hover:before {
      transform: scale(1);
    }
  }
}
</style>
