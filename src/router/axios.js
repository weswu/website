import axios from 'axios'
axios.defaults.timeout = 15000

// 添加一个请求拦截器
axios.interceptors.request.use(config => {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(res => {
  return res.data
}, (error) => {
  return Promise.reject(error)
})
export default axios
