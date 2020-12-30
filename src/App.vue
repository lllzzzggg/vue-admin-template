<!--
 * @Descripttion:
 * @version: v0.0.1
 * @Date: 2020-01-08 10:35:19
 * @LastEditors: liuzigen
 * @LastEditTime: 2020-02-13 16:21:36
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import store from './store'
// import router from '@/router'
export default {
  name: 'App'
  // mounted () {
  // this.$nextTick(async () => {
  //   const accessRoutes = await store.dispatch('permission/generateRoutes')
  //   router.addRoutes(accessRoutes)
  // })
  // }
}
</script>
