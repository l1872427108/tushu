<template lang="html">
  <div class="loading-page" v-if="loading">
    <div data-loader="jumping"></div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style lang="less" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 99999;
  p {
    position: absolute;
    top: 47%;
    left: 51%;
    transform: translate(-51%, -47%);
    font-family: cursive;
    font-size: 25px;
  }
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #bebebe;
    filter: Alpha(Opacity=60);
    opacity: 0.6;
  }
}

[data-loader="jumping"] {
  position: relative;
  width: 80px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  -webkit-perspective: 200px;
  -moz-perspective: 200px;
  -ms-perspective: 200px;
  perspective: 200px;
}
[data-loader="jumping"]:before,
[data-loader="jumping"]:after {
  position: absolute;

  width: 35px;
  height: 35px;
  content: "";
  animation: jumping 0.5s infinite alternate;

  background: rgba(0, 0, 0, 0);
}
[data-loader="jumping"]:before {
  left: 0;
}
[data-loader="jumping"]:after {
  right: 0;

  animation-delay: 0.15s;
}
@-webkit-keyframes jumping {
  0% {
    -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
    -ms-transform: scale(1) translateY(0px) rotateX(0deg);
    -o-transform: scale(1) translateY(0px) rotateX(0deg);
    transform: scale(1) translateY(0px) rotateX(0deg);

    -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    transform: scale(1.2) translateY(-25px) rotateX(45deg);

    background: rgb(255, 99, 50);
    -webkit-box-shadow: 0 25px 40px rgb(255, 99, 50);
    box-shadow: 0 25px 40px rgb(255, 99, 50);
  }
}
@-moz-keyframes jumping {
  0% {
    -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
    -ms-transform: scale(1) translateY(0px) rotateX(0deg);
    -o-transform: scale(1) translateY(0px) rotateX(0deg);
    transform: scale(1) translateY(0px) rotateX(0deg);

    -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    transform: scale(1.2) translateY(-25px) rotateX(45deg);

    background: rgb(255, 99, 50);
    -webkit-box-shadow: 0 25px 40px rgb(255, 99, 50);
    box-shadow: 0 25px 40px rgb(255, 99, 50);
  }
}
@-o-keyframes jumping {
  0% {
    -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
    -ms-transform: scale(1) translateY(0px) rotateX(0deg);
    -o-transform: scale(1) translateY(0px) rotateX(0deg);
    transform: scale(1) translateY(0px) rotateX(0deg);

    -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    transform: scale(1.2) translateY(-25px) rotateX(45deg);

    background: rgb(255, 99, 50);
    -webkit-box-shadow: 0 25px 40px rgb(255, 99, 50);
    box-shadow: 0 25px 40px rgb(255, 99, 50);
  }
}
@keyframes jumping {
  0% {
    -webkit-transform: scale(1) translateY(0px) rotateX(0deg);
    -ms-transform: scale(1) translateY(0px) rotateX(0deg);
    -o-transform: scale(1) translateY(0px) rotateX(0deg);
    transform: scale(1) translateY(0px) rotateX(0deg);

    -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);
    transform: scale(1.2) translateY(-25px) rotateX(45deg);

    background: rgb(255, 99, 50);
    -webkit-box-shadow: 0 25px 40px rgb(255, 99, 50);
    box-shadow: 0 25px 40px rgb(255, 99, 50);
  }
}
</style>
