let sign = 'fatigue'
let val = 3
let isFatigue = true
function transformKey(selectChange, sign, isFatigue) {
    if (selectChange === 0) {
        sign = 'fatigue'
        isFatigue = true
    } else if (selectChange === 1) {
        isFatigue = false
        sign = 'focus'
    } else if (selectChange === 2) {
        sign = 'cautel'
        isFatigue = false
    } else if (selectChange === 3) {
        sign = 'calm'
        isFatigue = false
    }
    console.log(sign)
}
transformKey(val, sign, isFatigue)
