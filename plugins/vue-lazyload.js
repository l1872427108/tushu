import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.33,
  //加载失败
  error: "",
  //加载中图片
  loading:
    "https://gw.pugetd.com/2021-06-16/20e2f52c-bf45-445b-806b-a917753a2ab8_loading.gif",
  attempt: 2,
  throttleWait: 500
});
