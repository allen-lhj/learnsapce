const obj = {
  name: 'lhj',
  age: 23,
  sayName() {
    console.log(this.name)
  }
}

console.log(Object.values(obj))