/*
 * @Autor: lhj
 * @Date: 2020-12-09 15:26:24
 * @LastEditTime: 2021-03-25 18:19:50
 */
// 静态属性指的是Class本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性
class Foo {

}
Foo.prop = 1

class Person {
  constructor(name) {
    this.name = name
    // this.talk = this.talk.bind(this)
  }
  talk() {
    console.log(`${this.name}`)
  }
}
const Grey = new Person('Grey')
const mockDomButton = {} // 模拟一个DOM上的按钮对象
mockDomButton.onClick = Grey.talk; // 绑定点击事件
mockDomButton.onClick() // 输出的结果是 undefined 原因是 onClick 被调用时，其实是 talk 函数在执行，
//且talk 函数的this 指向的是 mockDomButton 而不是 Grey ，mockDomButton 并没有 name 属性于是 输出了 undefined 