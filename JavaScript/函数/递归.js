function factiorial(num) {
    if (num < 1) {
        return num
    } else {
        return num * arguments.callee(num - 1)
    }
}
var anotherfactiorial = factiorial
factiorial = null
console.log(anotherfactiorial(10))
