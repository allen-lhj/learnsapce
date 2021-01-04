class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    // 获取栈中最后添加的元素（查看栈顶元素）
    peek() {
        return this.items[this.items.length - 1]
    }
    //检查栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }
    clear() {
        this.items = []
    }
}
const stack = new Stack()
// console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
// console.log(stack.peek())
stack.pop()
console.log(stack)
// 栈可以比作是把书叠放起来，添加是从顶上添加，拿走也是从顶上拿走
// 数组是一个有序集合，为了保证元素排序有序，它会占用更多的内存空间
