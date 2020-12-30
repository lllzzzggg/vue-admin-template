/*
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-02-11 19:50:45
 * @LastEditors: lzg
 * @LastEditTime: 2020-05-26 11:51:09
 */
import store from '@/store'
import router from '@/router'
console.log('asyncRoute')
store.dispatch('permission/generateRoutes').then(res => {
  router.addRoutes(res)
})
