
//map 提取对象数组中的指定元素
var list = [
    {
        "id": 1,
        "age": 20,
        "num": 12
    },
    {
       "id":2,
        "age": 21,
        "num": 13
    },
    {
        "id":4,
         "age": 211,
         "num": 123
     }
]
var Gpsdata = [
    { name: '张三', value: [116.316987, 40.066883], color: '#d5e61c' },
    { name: '王武', value: [116.316987, 40.066719], color: '#1296db' },
    { name: '李四', value: [116.316797, 40.066683], color: '#ccc' }
  ]
var ages = list.map(item => item.age)
var names = Gpsdata.map(item => item.name)
console.log(ages)
console.log(names)