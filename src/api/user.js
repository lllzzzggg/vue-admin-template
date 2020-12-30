/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-01-08 10:35:19
 * @LastEditors: lzg
 * @LastEditTime: 2020-05-25 18:23:22
 */
import request from '@/utils/request'
const authUrl = process.env.NODE_ENV === 'development' ? '' : 'api/auth'

function getUserMenu (params) {
  return request({
    url: authUrl + '/api/user/getMenuMsgByMidAndUid',
    method: 'get',
    params
  })
}

export default {
  getUserMenu
}
