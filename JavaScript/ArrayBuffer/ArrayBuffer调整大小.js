/*
 * @Autor: lhj
 * @Date: 2021-03-25 15:56:47
 * @LastEditTime: 2021-03-25 16:10:52
 */
const buf1 = new ArrayBuffer(16)
const buf2 = buf1.slice(0, buf1.byteLength)
console.log(buf2)


const str1 = '123456'
const str2 = str1.slice(0, str1.length)
console.log(str2)