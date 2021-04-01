// 传入一个基准对象，将这个对象赋值给临时构造函数的原型，在将这个临时函数的实例return出去
function People(o) {
  function F() {}
  F.prototype = o
  return new F()
}

let person = {
  name: 'Nick',
  friends: ['Shelly', 'Court', 'Van']
}
let anotherPeople = People(person)
anotherPeople.friends.push('Jess')

console.log(anotherPeople.friends) // [ 'Shelly', 'Court', 'Van', 'Jess' ]
let yetAnotherPeople = People(person)
yetAnotherPeople.name = 'Linda'

console.log(yetAnotherPeople.name) // Linda

yetAnotherPeople.friends.push('Barbie') 
console.log(anotherPeople.friends) //[ 'Shelly', 'Court', 'Van', 'Jess', 'Barbie' ]

let another = Object.create(person, {
  name: {
    value: 'Greg'
  }
})

console.log(another.friends) // //[ 'Shelly', 'Court', 'Van', 'Jess', 'Barbie' ]
console.log(another.name) // Greg
