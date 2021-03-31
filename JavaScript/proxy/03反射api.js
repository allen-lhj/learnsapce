/*
 * @Autor: lhj
 * @Date: 2021-03-26 16:37:25
 * @LastEditTime: 2021-03-26 17:34:26
 */
// const target = {
//   foo: 'bar'
// }

// const handler = {
//   get() {
//     // Reflect.get() 从对象身上获取某个属性的值，类似于target(name)
//     return Reflect.get(...arguments)
//   }
// }

// const proxy = new Proxy(target, handler)
// // console.log(proxy.foo)
// console.log(Reflect.has(target, 'foo'))

const target1 = {
  name: 'lhj',
  age: 23
}

const handler = {
  get(targetType, property, receiver) { 
    let decoration = '';
    if (property === 'name') {
      return Reflect.get(...arguments) + '真帅'  
    }
  }
}

const proxy = new Proxy(target1, handler)
console.log(proxy.name)

Reflect.set(target1, 'age1', 24)
console.log(target1)