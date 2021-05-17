

const len = {}

// for(let i = 0; i<data.length;i++) {
//   var item = data[i]
//   len[item] = data
// }
function sum(arr) {
    var s = 0;
    for (var i = 0;i<arr.length;i++) {
        s += arr[i];
    }

    return s;
}
// data.reduce((prev, next) => {
//   prev[next] = (prev[next] + 1) || 1
//   console.log(prev)
//     const result = []
//     const arr = Object.values(prev)
//     for (let i=0;i<arr.length;i++) {
//         result.push((arr[i]/sum(arr)*100).toFixed(2))
//     }
//     console.log(result)
//   return prev
// }, {})
let a = 3
console.log(a = (a+1)||1)
// function red(data) {
//     data.reduce((prev, next) => {
//         prev[next] = (prev[next] + 1) || 1
//         const result = []
//         const arr = Object.values(prev)
//         for (let i=0;i<arr.length;i++) {
//             result.push((arr[i]/sum(arr)*100).toFixed(2))
//         }
//         console.log(result)
//         return prev
//     }, {})
// }
// console.log(red(data))
const data = [1,1,1,1,2]
const count = (arr) => {
    const ans = [0,0,0,0,0]

    for(let i = 0; i< arr.length; ++i) {
        ++ans[arr[i]]
    }
    const counts = [ans[1],ans[2],ans[3],ans[4]]
    const result = []
    for (let i = 0; i< counts.length; i++) {
        result.push((counts[i]/ sum(counts)*100).toFixed(2))
    }
    console.log(result)
    return result
    // return [ans[1],ans[2],ans[3],ans[4]]

}

console.log(count(data))
