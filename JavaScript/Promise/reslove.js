const p = Promise.resolve('foo')
p.then(res => {
  console.log(res)
})