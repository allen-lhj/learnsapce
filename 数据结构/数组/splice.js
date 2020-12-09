var arr = [1,2,3,4,5,6]
console.log(arr)
arr.splice(1,0,1,1,1) // 第一个参数表示起始索引，第二个参数表示要删除的个数，如果不想删除就设为0
console.log(arr)
arr.splice(0,3) // 第二个参数为3表示要删除三个值
console.log(arr)
