import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://127.0.0.1:8081',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = store.getters.token
    }
    return config
  }
)
service.interceptors.response.use(
  response => {
    console.log('response:' + JSON.stringify(response.data))
    return response.data
  },
  error => {
    console.log('err' + error.message) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    error.message = '网络错误'
    return Promise.reject(error)
  }
)

export default service
