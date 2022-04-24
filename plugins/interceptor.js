export default ({ store, route, redirect, $axios }) => {
  //请求拦截器
  $axios.onRequest(config => {
    return config;
  });
  //响应拦截器
  $axios.onResponse(res => {
    return res.data;
  });
  $axios.onError(err => {
    return Promise.reject(err);
  });
};
