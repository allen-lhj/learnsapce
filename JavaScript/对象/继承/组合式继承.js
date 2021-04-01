function A(name) {
  this.name = name
  this.colors = ['red', 'blue', 'pink']
}
A.prototype.sayName = function() {
  return `Im ${this.name}`
}

function B(name, age) {
  A.call(this, name)
  this.age = age
}


B.prototype = new A()
B.prototype.sayAge = function() {
  return this.age
}
let c = new B('jess', 23)
c.colors.push('black')
console.log(c.name) // jess
console.log(c.colors) // [ 'red', 'blue', 'pink', 'black' ]
console.log(c.sayName()) //Im jess
let b = new B('wangfei', 25)
console.log(b.colors) // [ 'red', 'blue', 'pink' ]
console.log(b.sayName()) //Im wangfei
console.log(b.sayAge()) //25
