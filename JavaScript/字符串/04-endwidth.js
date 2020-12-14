// String.prototype.endsWith()
// 判断一个字符串的是否以给定字符串结尾，结果返回布尔值。

// str.endsWith(searchString[, length])
// 参数：
//     searchString：要搜索的子字符串。
//     length：作为 str 的长度。默认值为 str.length。

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false
