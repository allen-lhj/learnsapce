// Object.prototype.toString 返回一个表示该对象的字符串
const date = new Date()

console.log(Object.prototype)
console.log(Object.prototype.toString.call(date)) // [object Date]
console.log(Object.prototype.toString(date)) // [object Object]

