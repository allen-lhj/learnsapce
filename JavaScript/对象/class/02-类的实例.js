//定义类
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point(2, 3);

point.toString() // (2, 3)
// 因为x和y都是实例对象的属性，所以返回true
point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
// toString是原型对西那个的属性，所以返回false
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true

// constructor方法默认返回实例对（即this）
