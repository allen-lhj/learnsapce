let arr = [{name:'l', age:23}, {name: 'h', age: 33}]
var keyv = []
var v = []
arr.forEach(item => {
  let data = item
  keyv.push(Object.entries(data))
})
// console.log(keyv)