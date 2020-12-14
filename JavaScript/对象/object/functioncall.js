// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
// function.call(thisArg, arg1, arg2, ...)
// thisArg : 可选的，在函数运行时使用的this值
// arg1： 指定的参数列表

// call() 允许为不同的对象分配和调用属于一个对象的函数/方法。
// call() 提供新的 this 值给当前调用的函数/方法。
// 你可以使用 call 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）

function Product(name, price) {
    this.name = name
    this.price = price
}
// 调用父类构造函数的call方法实现继承
// Food构造函数创建的对象实例都会拥有Product构造函数中添加的name属性和price属性
function Food(name, price) {
    Product.call(this, name, price)
    this.category = 'food'
}
