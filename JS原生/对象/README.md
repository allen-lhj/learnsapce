在 JavaScript 中，几乎“所有事物”都是对象。

1. 布尔是对象（如果用 new 关键词定义）
2. 数字是对象（如果用 new 关键词定义）
3. 字符串是对象（如果用 new 关键词定义）
4. 日期永远都是对象
5. 算术永远都是对象
6. 正则表达式永远都是对象
7. 数组永远都是对象
8. 函数永远都是对象
对象永远都是对象
所有 JavaScript 值，除了原始值，都是对象。
   
对象是包含变量的变量
```javascript
var person = "Bill Gates"
```
对象也是变量。但是对象能够包含很多值,所以对象是命名值的集合
```javascript
var person = {firstName: "Bill", lastName:"Gates", age:62, eyeColor:"blue"}
```
对象中的命名值被称为属性，类似`firstName`就是person对象的属性，Bill就是对象的属性值
for in 循环用来遍历对象的属性

