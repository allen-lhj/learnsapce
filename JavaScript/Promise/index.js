// function timeout(ms) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(resolve, ms, 'done') // 过ms秒后，将后面的done参数传给resolve函数
//   })
// }

// timeout(3000).then((value)=> {
//   console.log(value)
// })
const p1 = new Promise(function(resolve, reject) {
  console.log('create a promise')
  resolve(111)
})