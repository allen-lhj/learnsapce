function SuperType() {
  this.colors = ['red', 'blue', 'pink']
}

function SubType() {
  SuperType.call(this)
}

let sub1 = new SubType()
console.log(sub1.colors) // ['red', 'blue', 'pink']
sub1.colors.push('orange')
console.log(sub1.colors) // ['red', 'blue', 'pink', 'orange' ]

let sub2 = new SubType()
console.log(sub2.colors) // ['red', 'blue', 'pink' ]
// 通过使用call()（或apply()）方法，SuperType构造函数在为SubType的实例创建的新对象的上下文中执行了。
// 这相当于新的SubType对象上运行了SuperType()函数中的所有初始化代码。结果就是每个实例都会有自己的colors属性