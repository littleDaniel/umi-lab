import axios from 'axios'
import { getToken } from '@/utils/token'
console.log(process.env.REACT_APP_URL)
const token = getToken()
// 创建 axios 实例
const instance = axios.create({
//   baseURL: process.env.REACT_APP_URL,
  baseURL: '/gateway',
  timeout: 5000,
  headers: token? {'Content-Type': 'application/json'}:{'Content-Type': 'application/x-www-form-urlencoded','Authorization':'basic dGFjY2lzdW06YWJjZGU=' }
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    // 将token 配置到 请求头
    // 假设一个token
    // const token = getToken()
    if (token) {
        config.headers['encrypt-token'] = getToken()
    } 
    return config
  },
  error => {
    console.log(error)
    // 返回错误
    return Promise.reject(error)
  }
)
// 响应拦截
instance.interceptors.response.use(
  response => {
    const res = response.data
    // 请自己根据后台返回的状态码，自己修改下边的判断逻辑 you will todo...
    if (+res.code === 0) {
      return res.data
    } else {
      console.log('有问题')
      // 判断状态码, 提示语，自己进行弹窗 todo
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance