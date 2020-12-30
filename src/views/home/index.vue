<!--
 * @Descripttion: home
 * @version: v0.0.1
 * @Date: 2020-01-13 17:32:37
 * @LastEditors: lzg
 * @LastEditTime: 2020-05-26 11:43:35
 -->
<template>
  <div>this is default</div>
</template>

<script>
export default {
  async created () {
    // console.log(this.$router)
  },
  methods: {
    test () {
      this.$Api.getUserMenu({
        app: 'kcword'
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style></style>
