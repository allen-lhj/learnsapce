var arr = [{name:'li', age: 13, sex: 1}, {name: 'wang', age: 89, sex: 1}, {name:'liu', age: 17, sex: 2}]

// var arr2 = arr.map(item => item.name)
// console.log(arr2)
dict = {}
arr.forEach((item) => {
  dict = item.name
})
console.log(dict)