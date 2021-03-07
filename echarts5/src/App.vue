<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Echarts />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Echarts from './components/Echarts.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Echarts
  }
}
</script>
