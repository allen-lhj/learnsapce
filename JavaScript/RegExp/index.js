var reg = /\bis\b/g;
var str = 'hello my name is Liu';
console.log(str.replace(reg,'IS'))
//字符类
var str1 = 'a1b2c3d4'
console.log(str1.replace(/[abc]/g, 'X'))