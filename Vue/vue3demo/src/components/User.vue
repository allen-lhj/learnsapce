<template>
  <div>
    <h1>username: {{username}}</h1>
    <h1>age: {{age}}</h1>
    <h1>description: {{description}}</h1>
    <h1>姓名：{{name}}</h1>
    <h1>班级：{{classn}}</h1>
  </div>
</template>

<script>
import {ref, onMounted, inject} from 'vue'
export default {
name: "User",
  props: ['username', 'age'],
  setup(props) {
    console.log(props)
    const description = ref(props.username + '年龄是： '+ props.age)
    onMounted(() => {
      console.log('setup Mounted')
    })
    const student = inject('student')
    return {
      description,
      ...student
    }
  },
  created() {
    console.log('create')
  }
}
</script>

<style scoped>

</style>
