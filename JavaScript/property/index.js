/*
 * @Autor: lhj
 * @Date: 2021-03-25 17:40:53
 * @LastEditTime: 2021-03-25 17:49:46
 */

// 声明构造函数
function Person(){}

console.log(typeof Person) // function
console.log(Person.prototype) // Person {} 原型对象

// 构造函数的proyotype属性引用原型对象，原型对象的constructor属性，引用这个构造函数，二者循环引用
console.log(Person.prototype.constructor === Person)// true

// console.log(Person.prototype.__proto === Object.prototype) // true

let person1 = new Person(), person2 = new Person()
Person.prototype.name = 'Nicholas'

// isPrototypeOF会在传入参数的Prototype指向调用它的对象时返回ture
// 返回true证明person1 的原型对象指向Person
console.log(Person.prototype.isPrototypeOf(person1)) // true

// getPrototypeOf() 返回参数内部特性[[Prototype]]的值
console.log(Object.getPrototypeOf(person1) == Person.prototype) // true
console.log(Object.getPrototypeOf(person1).name) // Nicholas
