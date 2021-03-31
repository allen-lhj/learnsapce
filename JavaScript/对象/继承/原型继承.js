//SubType的所有实例都会共享这个colors属性。这一点通过instance1.colors上的修改也能反映到instance2.colors上就可以看出来

function SuperType() {
  this.colors = ['red', 'blue', 'pink']
}
function SubType() {
  
}
SubType.prototype = new SuperType()

let sub1 = new SubType()
console.log(sub1.colors) // ['red', 'blue', 'pink']
sub1.colors.push('orange')
console.log(sub1.colors) // ['red', 'blue', 'pink', 'orange' ]

let sub2 = new SubType()
console.log(sub2.colors) // ['red', 'blue', 'pink', 'orange' ]