let arr = [{state:5, focus: 0, fatigue: 0}, {state: 1, focus:10, fatigue: 20}, {state: 4, focus:10, fatigue: 20}]
var state = 0
var focus = 0
var vag = 0

var status = arr.filter(item => item.state < 5)

if (status.length !== 0) {
    avg = status.length
    var sum = status.reduce((pre, curr) => ({state: pre.state + curr.state, focus: pre.focus + curr.focus, fatigue: pre.state + curr.fatigue}) )
    state = sum.state /avg
}

console.log(status)
console.log(status.length)
console.log(state)
