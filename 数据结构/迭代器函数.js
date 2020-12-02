function isEven(x) {
  //如果x是2的倍数，就返回true
  console.log(x)
  return x % 2 === 0 ? true : false
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]

// numbers.every(isEven)   //1

// numbers.some(isEven)  // 1 2

// numbers.forEach(x => console.log(x % 2 === 0)) 

const myMap = numbers.map(isEven)
console.log(myMap)
