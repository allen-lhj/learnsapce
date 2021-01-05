// 在使用数组时，大部分方法的时间复杂度是O(n)，意思是我们需要迭代整个数组直到找到要找的哪个元素，
// 在最坏的情况下需要迭代数组的所有位置，其中n代表数组的长度。如果数组有更多元素的话，所需要的时间会更长
// 数组是一个有序集合，为了保证元素排序有序，它会占用更多的内存空间

// 使用count属性来记录栈的大小
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // 验证是否为空
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    // 查看栈顶
    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count-1]
    }
    // 清空栈
    clear() {
        this.count = 0
        this.items = {}
    }
    toString() {
        // 如果栈是空的返回空字符串
        if (this.isEmpty()) {
            return ''
        }
        // 如果不是空的，底部第一个元素作为初始值
        let objString = `${this.items[0]}`
        // 从第二个开始进行迭代
        for (let i = 1; i < this.count; i ++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}
const stack = new Stack()
// stack.push(5)
// sta
// ck.push(8)
// stack.push(80)
// console.log(stack.toString())
// 返回对象所有自由属性的名称
// console.log(Object.getOwnPropertyNames(stack))
// console.log(Object.keys(stack))

// function decimalToBinary(decNumber) {
//     const remStack = new Stack()
//     let number = decNumber
//     let rem
//     let binaryString = ''
//
//     // number 对2取余数，在除2在对2取余数
//     while (number > 0) {
//         rem = Math.floor(number % 2)
//         remStack.push(rem)
//         number = Math.floor(number / 2)
//     }
//
//     while (!remStack.isEmpty()) {
//         binaryString += remStack.pop().toString()
//     }
//     return binaryString
// }

function decimalToBinary(decNumber, base) {
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIGKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem
    let baseString = ''

    // number 对2取余数，在除2在对2取余数
    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }
    return baseString
}
console.log(decimalToBinary(100345,2)) // 11101001
console.log(decimalToBinary(100345,16))
