function timeout(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms, 'done') // 过ms秒后，将后面的done参数传给resolve函数，resolve函数将promise状态变为已完成
  })
}
// // then方法接收两个函数作为参数，当上一个promise状态变为resolved时，执行第一个回调函数
timeout(3000).then((value)=> {
  console.log(value)
})

const promise = new Promise(function(resolve, reject) {
  // some code
  if (/* 异步操作成功*/) {
    resolve(value)
  } else {
    reject(value)
  }
})

