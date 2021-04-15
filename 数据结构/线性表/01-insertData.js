// 在list第i个位置插入元素,假设i以存在
let list = [1,2,2,3,4,5]

// 如果插入位置不合理，抛出异常；
// 如果线性表长度大于等于数组长度 ，则抛出异常或动态增加容量；
// 从最后一个元素开始向前遍历到第 i 个位置，分别将他们都向后移动一个位置；
// 将要插入元素填入位置 i 处；
// 表长加 1。
function insertItem(data, index) {
  if (list.length <= index ||index < 0) {
    throw Error('非法索引位置')
  } else {
    for(let i = list.length-1; i > index-1; i--) {
      list[i+1] = list[i]
    }
    list[index] = data
  }
  return list
}

const result = insertItem('o', -1)
console.log(result)