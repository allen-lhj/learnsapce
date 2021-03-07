// 使用this可以在上下文不同的对象中重复使用函数identify和speak()，不用针对每个对象编写不同的版本
var me = {
    name: 'jack'
}
var you = {
    name: 'reader'
}

function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = "Hello, I'm" + identify.call(this)
    console.log(greeting)
}
identify.call(me) // this is me object
identify.call(you) // this is you object
speak.call(me)
speak.bind(you)() // 使用bind返回的是一个新的函数需要再次调用
// 如果不实用this，就需要给identify()和speak显式的传一个上下文对象

// function identify2(context) {
//     return context.name.toUpperCase()
// }
//
// function speak2(context) {
//     var greeting = "Hello, I'm" + identify2(context)
// }
// identify2(you)
// speak2(me)
