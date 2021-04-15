/**
* 初始条件：链表 list 已经存在且 1 ≤ index ≤ list.length
* 获取数据
* @param {number} index
*/
const list = [1,2,3,4,5]

function getData(index) {
  if (index < 0 || index >= list.length) {
    throw Error('非法索引')
  } else {
    for (let i = 0; i < list.length; i++) {
      if (i === index){
        return list[i]
      }
    }
  }
}

console.log(getData(1))