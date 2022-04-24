export default ({ $axios }, inject) => {
  //请求注入
  //顶部轮播图
  inject("topBanner", () => $axios.$get("/front/library-banner/SelectBanner"));
  //友情链接
  inject("friendView", () =>
    $axios.$get("/front/libaray-links/SelectAllLinks")
  );
  //底部滚动轮播图
  inject("bottomroll", () =>
    $axios.$get("/front/library-department/selectAllDepartment")
  );
  //数字资源
  inject("numberSource", () => $axios.$get("/front/library-math/getMath"));
  //新闻首页查询
  inject("queryNews", () => $axios.$get("/front/library-news/getFirstAllNews"));
};
