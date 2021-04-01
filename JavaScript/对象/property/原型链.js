function Super() {
  this.property = 'Super'
}
// 定义 Super的原型方法
Super.prototype.getSuperValue = function() {
  return this.property
}

function Sub() {
  this.subproperty = false
}
//继承，将Sub构造函数的原型设置为Super的实例
Sub.prototype = new Super()
Sub.prototype.getSubValue = function() {
  return this.subproperty
}

let instance = new Sub()
// instance(Sub的实例）此时指向----->Sub的原型对象（Super的实例）此时指向 ------>Super的原型对象
// console.log(instance.getSuperValue()) // Super

function A() {
  this.Aname = 'aaaa'
}

A.prototype.getAValue = function() {
  return this.Aname
}

function B() {
  this.Bname = 'b'
}

B.prototype = new A()

B.prototype.getAValue = function() {
  return false
}

let c = new B()

console.log(c.getAValue())
// console.log(c.Bname)
// console.log(c.Aname)
// console.log(c instanceof A) // true
// console.log(c instanceof B) // true
// console.log(c instanceof Object) // true