// let s = Symbol()
// let s2 = Symbol('学习ES6')
// let s3 = Symbol('学习ES6')
// console.log(s2===s3)//fasle

// let a1 = Symbol.for('123')
// let a2 = Symbol.for('123')
// console.log(a1 === a2)//true
 //不能与其他数据进行运算
 
 //Symbol的使用
//  给对象添加属性和方法
//例如当我们想要给一个不了解的对象添加一个方法
let game = {
    name: 'hello'
}
//声明一个对象
let methods = {
    up: Symbol(),
    down: Symbol()
}
//避免与game内部声明的方法出现冲突
// game[methods.up] = function() {
//     console.log("jump")
// }

// game[methods.down] = function() {
//     console.log("putdown")
// }
// console.log(game)

//-----------2
// let youxi = {
//     name: "狼人杀",
//     [Symbol('say')]:function () {
//         console.log('我是法官')
//     }
// }
// console.log(youxi)