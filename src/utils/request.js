/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-01-08 10:35:19
 * @LastEditors: lzg
 * @LastEditTime: 2020-05-26 11:38:23
 */
import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : '/'
const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: process.env.NODE_ENV === 'development' ? { userid: 16 } : null
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 0, it is judged as an error.
    if (res.code && res.code !== 0) {
      Message({
        message: res.errMsg || 'Error',
        type: 'error',
        duration: 7 * 1000
      })
      return Promise.reject(new Error(res.errMsg || 'Error'))
    } else {
      return Promise.resolve(res.data)
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.errMsg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
