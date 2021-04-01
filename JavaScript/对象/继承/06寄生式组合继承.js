function A(name) {
  this.name = name
  this.colors = ['red', 'blue', 'orange']
}

A.prototype.sayName = function() {
  console.log(name)
}

function B(name, age) {
  A.call(this, name) // 第二次调用A
  this.age = age
}
function People(o) {
  function F() {}
  F.prototype = o
  return new F()
}
function inheritPrototype(B, A) {
  let propertype = People(A.propertype)
  propertype.constructor = B
  B.propertype = propertype
}

inheritPrototype(B, A)
let c = new B()
console.log(c.colors)
let d = new B()
d.colors.push('black')
console.log(c.colors)
