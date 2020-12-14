// charAt() 方法从一个字符串中返回指定的字符。
// str.charAt(index:一个介于0 和字符串长度减1之间的整数。 (0~length-1))

var anyString = "Brave new world"

console.log(anyString.charAt(0)) // B
console.log(anyString.charAt(5)) // ' '

// str.charCodeAt(index)
// charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元

"ABC".charCodeAt(0) // returns 65:"A"
