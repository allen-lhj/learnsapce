const obj = {
  name: 'lhj',
  age: 23,
  sayName() {
    console.log(this.name)
  }
}

obj.sayName()
console.log(Object.entries(obj))