//class是ES5通过构造函数实例化对象的语法糖，使其更像面向对象的语法
class Phone{
    //构造方法
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }
    //方法必须使用这种语法，不能使用ES5的对象完整形式
    call() {
        console.log('我可以打电话')
    }
}
let Huawei = new Phone('华为', 7999)
console.log(Huawei);
class Car {
    static name = 'xiaomi'
}
let benchi = new Car()
console.log(benchi.name)//class中使用static定义的属性不能继承