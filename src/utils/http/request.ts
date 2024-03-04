import axios from 'axios'
import mpAdapter from "axios-miniprogram-adapter";
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.adapter = mpAdapter;


// create an axios instance
const service = axios.create({
  baseURL: "https://api.youlai.tech", //  线上接口地址(微信、HBX内置浏览器)
  // baseURL: "http://app.youlai.tech/prod-api", // 线上接口地址(谷歌等有跨域限制浏览器)
  // baseURL: "http://localhost:9999", // 本地开发环境地址
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (config.headers.auth === true) { // 判断请求是否需要认证
      const token = uni.getStorageSync('token')
      if (token) {
        config.headers['Authorization'] = token;
      }
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)


// response interceptor
service.interceptors.response.use(({
  config,
  data
}) => {
  return data
},
  error => {
    const {
      code,
      msg
    } = error?.response?.data || {}

    if (code === 'A0230') { // token过期
      uni.showToast({
        title: '会话已过期，请重新登录',
        success() {
          uni.navigateTo({ url: `/pages/login/login`, });
        }
      })
    } else {
      uni.showToast({
        title: msg,
        icon: 'none'
      });
      return Promise.reject(new Error(msg || 'Errors'))
    }
  }
)

export default service