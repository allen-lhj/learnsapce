/*
 * @Autor: lhj
 * @Date: 2021-03-25 17:40:53
 * @LastEditTime: 2021-03-25 17:49:46
 */
// function SuperType() {
//   this.property = true
// }

// SuperType.prototype.getSuperValue = function() {
//   return this.property
// }

// function SubType() {
//   this.Subproperty = false
// }

// SubType.prototype = new SuperType()

function Person(age) {
  this.age = age
}
let person1 = new Person(2)
console.log(person1)