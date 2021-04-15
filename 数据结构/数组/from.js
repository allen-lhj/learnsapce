const arr1 = [1,2,3]
const arr2 = Array.from(arr1)
console.log(arr2) //[1,2,3]

const arr3 = Array.from(arr1, item => (item % 2 === 0))
console.log(arr3) //[ false, true, false ]