// indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1
// str.indexOf(searchValue [, fromIndex])
// 参数：
//     searchValue：要被查找的字符串值
//     fromIndex 可选
//     数字表示开始查找的位置。可以是任意整数，默认值为 0
"Blue Whale".indexOf("blue")      // 返回 -1
console.log("Blue Whale".indexOf("lue"))      // 返回 1
//
// lastIndexOf() 方法返回调用String 对象的指定值最后一次出现的索引，
// 在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1
