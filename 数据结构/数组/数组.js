let fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1
// 从数组的第三个位置开始每个值等于前两个值的和
for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
console.log(fibonacci)
// 循环输出这个数组
// for (let i = 1; i < fibonacci.length; i++) {
//   console.log(fibonacci[i])
// }
