/*
 * @Autor: lhj
 * @Date: 2021-03-25 16:33:02
 * @LastEditTime: 2021-03-25 16:40:22
 */
const m = new Map([
  ['name', 'lhj'],
  ['age', 23]
])

console.log(m)

const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map()
items.forEach(([key, val]) => map.set(key, val))
console.log(m.get('name'))