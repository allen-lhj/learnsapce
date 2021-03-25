/*
 * @Autor: lhj
 * @Date: 2021-03-01 23:28:56
 * @LastEditTime: 2021-03-25 15:49:32
 */
var reg = /\bis\b/g;
var str = 'hello my name is Liu';
console.log(str.replace(reg,'IS'))


//字符类
var str1 = 'a1b2c3d4'
console.log(str1.replace(/[abc]/g, 'X'))


/**
 * @description: test字符匹配正则返回true，否则为esle
 * @param    ^表示以什么开头
 */
var reg1 = /^a/g
console.log(reg1.test(str1))