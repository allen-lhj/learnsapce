const object1 ={}

// Object.defineProperty(obj：要定义属性的对象, prop：要定义或修改的属性的名称或 Symbol , descriptor：要定义或修改的属性描述符。)
Object.defineProperty(object1, 'name', {
    value: 29,
    writable: false
})

object1.property1 = 77; // 设置了writable:false throws an error in strict mode

console.log(object1.name)

// 该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，
// 在枚举对象属性时会被枚举到（for...in 或 Object.keys 方法），可以改变这些属性的值，
// 也可以删除这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty()
// 添加的属性值是不可修改（immutable）的。
