// for-in 循环遍历对象的属性
let txt: string = ''
let person: object = {fname: 'Bill', lname: 'Gates', age: 62}
for (let i in person) {
    txt += person[i] + ' '
}
console.log(txt)
