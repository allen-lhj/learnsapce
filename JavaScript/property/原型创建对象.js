function Person() {}
Person.prototype.name = 'lhj';
Person.prototype.age = 29;
Person.prototype.sayName = function() {
  console.log(this.name)
}
let person1 = new Person()
person1.sayName() // lhj
let person2 = new Person()

console.log(person1.sayName == person2.sayName) // true

console.log(person1.hasOwnProperty('name')) // fasle
console.log(Object.keys(Person.prototype)) // [ 'name', 'age', 'sayName' ]
console.log(Object.getOwnPropertyNames(Person.prototype))