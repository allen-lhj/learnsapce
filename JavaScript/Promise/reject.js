var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(300)
  }, 2000)
})

promise.then((value) => {
  console.log(value + 1)
},(e)=> {
  console.log(e)
})