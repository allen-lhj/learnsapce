/*
 * @Autor: lhj
 * @Date: 2021-03-26 18:15:51
 * @LastEditTime: 2021-03-26 18:32:54
 */
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (value < 20) {
        throw new TypeError('the age is too young')
      }
    }
    obj[prop] = value
  }
}

const target = {
  name: 'lhj'
}

Reflect.defineProperty(target, 'age', {
  value: 23,
  writable: false,

})

let person = new Proxy(target, validator)
person.age = 30
console.log(person.age)