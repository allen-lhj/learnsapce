<template>
<div>
  个人中心
  <button @click="goAbout">点击</button>
</div>
</template>

<script>
export default {
  name: "Me.vue",
  methods:{
    goAbout(event) {
      this.$router.push({path: '/about'})
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>
