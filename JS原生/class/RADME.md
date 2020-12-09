ES6的`class`可以看作只是一个语法糖，class的写法让对象原型的写法更清晰
更像面向对象编程的语法
```javascript
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

//class 写法
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')'
    }
}
// 类的所有方法都定义在类的prototype上面

class Point {
    constructor() {
        // ...
    }

    toString() {
        // ...
    }

    toValue() {
        // ...
    }
}

// 等同于

Point.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
};
```
因此在类上面调用方法，其实就是调用原型上的方法
