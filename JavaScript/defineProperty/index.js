/*
 * @Autor: lhj
 * @Date: 2021-03-25 11:53:37
 * @LastEditTime: 2021-03-25 14:32:26
 */
 // 创建一个包含name属性的对象
let person = {
  name: 'Jess'
}
/**
 * @description: 
 * @param {要添加属性的对象, 属性名称， 要修改的对象特性}
 * @return {*}
 */
Object.defineProperty(person, 'age', {
  configurable: true, // 表示属性是否可以通过delete删除并重新定义,为false则不能删除，且无法修改
  writable: false, // 表示属性是否可以修改
  value: 23
})
// console.log(person.age)
// person.age = 24
// console.log(person.age)
// delete person.age
// console.log(person.age)
let descriptor = Object.getOwnPropertyDescriptor(person, 'age')
console.log(descriptor)