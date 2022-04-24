<template>
  <div>
    <section class="numSource">
      <div class="title_area">
        <div class="title_back">NUM RESOURCE</div>
        <div class="title_txt">数字资源</div>
      </div>
      <div class="numberSource">
        <div class="waterfall">
          <figure
            class="hover-menu"
            v-for="items in numberSource"
            :key="items.id"
          >
            <img v-lazy="items.mathUrl" />
            <div>
              <a :href="items.mathpirurl" target="_blank"
                >{{ items.mathName }}
              </a>
            </div>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    numberSource: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.numSource {
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
  .numberSource {
    flex: 1;
    .waterfall {
      width: 100%;
      margin: 0 auto;
      column-count: 4;
      column-gap: 10px;
    }
    .hover-menu {
      position: relative;
      overflow: hidden;
      max-width: 340px;
      margin-bottom: 10px;
      width: 100%;
      background: #000;
      text-align: center;
      box-sizing: border-box;
      // break-inside: avoid;
      border-radius: 5px;
    }
    .hover-menu img {
      position: relative;
      max-width: 100%;
      top: 0;
      right: 0;
      opacity: 1;
      transition: 0.3s ease-in-out;
    }

    .hover-menu div {
      position: absolute;
      top: 0;
      left: -90px;
      width: 90px;
      height: 100%;
      // padding: 8px 4px;
      background: #000;
      transition: 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hover-menu div a {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      line-height: 1.5;
      color: #fff;
      opacity: 0.8;
      padding: 5px 15px;
      position: relative;
      transition: 0.3s ease-in-out;
    }

    .hover-menu div a:hover {
      text-decoration: underline;
    }

    .hover-menu:hover img {
      opacity: 0.5;
      right: -90px;
    }

    .hover-menu:hover div {
      left: 0;
      opacity: 1;
    }
  }
}
</style>
