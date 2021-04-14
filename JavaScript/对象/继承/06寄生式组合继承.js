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
// function People(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }
// function inheritPrototype(Child, Parent) {
//   let propertype = People(Parent.propertype)
//   propertype.constructor = Child
//   Child.propertype = propertype
// }
function extend(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    // Child.uber = Parent.prototype;
}

// inheritPrototype(B, A)
extend(B, A)
let c = new B()
console.log(c.colors)
let d = new B()
d.colors.push('black')
console.log(c.colors)
console.log(d.colors)
