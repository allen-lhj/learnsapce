<template>
  <div>
    <h1 @click="add">计数： {{ count }}</h1>
    <h1 @click="addNum">计数： {{ number }}</h1>
    <h1>name： {{ user.name }}</h1>
    <h1>name： {{ name }}</h1>
    <h1>age： {{ user.age }}</h1>
    <h1>age： {{ age }}</h1>
    <h1 @click="changeEvent">特点： {{ type }}</h1>
    <h1>反转： {{ reverseType }}</h1>
    <User :username="name" :age="age" : />
  </div>
</template>

<script>
import User from './components/User.vue'
// 响应引用对象时使用reactive， toRefs进行解构，
import { ref, reactive, toRefs, computed, watch,watchEffect, provide }  from 'vue'
export default {
  name: 'App',
  components:{User},
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
  setup() {
    console.log('setup')
    const number = ref(0)
    const user = reactive({
      name: '南哥',
      age: 23,
      type: '我很帅！ ',
      reverseType: computed(() => {
        return user.type.split('').reverse().join('')
      })
    })
    function addNum() {
      number.value++
    }
    function changeEvent() {
      user.type = '超级帅 ！'
    }
    // watch(number,(newv, oldv)=> {
    //   console.log(newv)
    // })
    watchEffect(() => {
      //在内部调用
      console.log(user.type)
    })
    // watch(user.type, (n, o) => {
    //   console.log('监听到类')
    // })
    const student = reactive({
      name: '小明',
      classn: '高三五班'
    })
    provide('student', student)

    return{
      number,
      addNum,
      user,
      ...toRefs(user),
      changeEvent
    }
  }
  // beforeCreate() {
  //   console.log('beforeCreate')
  // },
  // created() {
  //   console.log('created')
  // },
  // beforeMount() {
  //   console.log('beforeMount')
  // },
  // mounted() {
  //   console.log('mounted')
  // }
}
</script>
