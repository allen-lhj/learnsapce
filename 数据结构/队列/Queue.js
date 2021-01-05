class Queue {
    constructor() {
        this.count = 0;
        // 队列从前端移除元素，用来追踪第一个元素
        this.lowestCount = 0;
        this.items = {};
    }
    size() {
        return this.count - this.lowestCount
    }
    isEmpty() {
        return this.size() === 0
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i ++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}
// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log(queue)
// console.log(queue.toString())
// queue.enqueue(1)
// console.log(queue)
//
// queue.dequeue()
// console.log(queue.toString())

function hotPotato(elementList, num) {
    const queue = new Queue()
    const elimitatedList = []
    for (let i = 0; i< elimitatedList.length; i++) {
        queue.enqueue(elementList[i])
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return {
        elimitatedList: elimitatedList,
        winner: queue.dequeue()
    }

}
const names = ['John', 'Jack', 'Camila']
console.log(hotPotato(names, 7))
