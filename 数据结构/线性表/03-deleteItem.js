/**
* 初始条件：链表 list 已经存在且 1 ≤ index ≤ list.length
* 删除数据
* @param {number} index
*/
const list = [1,2,3,4,5]

function delItem(index) {
  if (list.length === 0||index < 0 || index >= list.length) {
    throw Error('非法索引')
  } else {
    for (let i = index; i < list.length - 1; i++) {
      list[i] = list[i+1]
    }
  }
  list.length--
  return list
}
console.log(delItem(1))