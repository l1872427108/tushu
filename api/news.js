export default ({ $axios }, inject) => {
  // 综合新闻  （前台显示内容）
  inject("newShow", (page, limit) =>
    $axios.$get(`/front/library-news/getAllNews/${page}/${limit}`)
  );
  // 综合新闻  根据id根查询新闻内容
  inject("journaNews", newsId =>
    $axios.$get(`/front/library-news/getNewsInfo/${newsId}`)
  );
};
