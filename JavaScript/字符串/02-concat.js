// concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
// str.concat(str2, [, ...strN])
// 参数：需要连接到 str 的字符串
// 返回：一个新的字符串，包含参数所提供的连接字符串


/*
* 性能考虑：
* 强烈建议使用赋值操作符（+, +=）代替 concat 方法。
* */
let hello = 'Hello'
console.log(hello.concat(' World')) // Hello World

