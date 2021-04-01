function People(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createAnotherObject(original) {
  let clone = People(original)
  clone.sayHi = function() {
    console.log('hi')
  }
  return clone
}

let person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

let anotherPerson = createAnotherObject(person)
anotherPerson.sayHi()