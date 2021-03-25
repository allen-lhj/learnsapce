// function jishu(a) {
//   result = a & 1
//   if (result == 0) {
//     console.log('你输入的数字为偶数')
//     return
//   }else {
//     console.log('你输入的数字为奇数')
//     return
//   }
// }
// jishu(10)
// new Promise(() => setTimeout(console.log, 0, 'executor'));
// setTimeout(console.log, 0, 'promise initialized')


let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 8))
setTimeout(console.log, 3000, p)

