const friends = [
  { name: 'John', age: 30},
  { name: 'Ana', age: 20},
  { name: 'Chris', age: 25},
]

function comparePerson(a, b) {
  if (a.age > b.age) {
    return -1
  }
  if (a.age < b.age) {
    return 1
  }
  return 0
}
// 在b大于a时，这段代码会返回负数，反之则返回正数。如果相等的话，就会返回0。也就是说返回的是负数，就说明a比b小，这样sort就能根据返回值的情况对数组进行排序。
console.log(friends.sort(comparePerson))