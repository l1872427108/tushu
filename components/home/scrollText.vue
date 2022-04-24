<template>
  <!-- 滚动文字效果 -->
  <div class="scoll-bar">
    <div class="remind-block">
      <img src="../../assets/image/home/home_hint.gif" />
      <div class="marquee-block">
        <div class="marquee">
          图书馆开放时间：周一到周六 8：00—22：00，周日
          8：00—17：00。&nbsp;&nbsp;
        </div>
        <div class="marqueeT">
          图书馆开放时间：周一到周六 8：00—22：00，周日
          8：00—17：00。&nbsp;&nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 滚动文字start
.scoll-bar {
  .remind-block {
    height: 35px;
    line-height: 35px;
    background-color: #ffffff;
    color: #000000;
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 100%;
    font-size: 14px;
    padding-right: 20px;
    z-index: 100;
  }

  .marquee-block {
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 15px;
    position: relative;
    letter-spacing: 1px;
  }

  .marquee {
    animation: marquee 20s linear infinite;
    white-space: nowrap;
    position: absolute;
  }

  .marqueeT {
    animation: marqueeT 20s linear infinite;
    white-space: nowrap;
    position: absolute;
  }

  @keyframes marquee {
    0% {
      left: 0;
    }

    100% {
      left: -105%;
    }
  }
  @keyframes marqueeT {
    0% {
      left: 105%;
    }

    100% {
      left: 0;
    }
  }

  .remind-block span {
    border-bottom: 1px solid #947334;

    font-weight: bold;
  }
  .remind-block img {
    height: 35px;
    position: absolute;
    right: -3px;
    top: -3px;
  }
}
</style>
