const people = {
  name: '小明',
  age: 23
}

const man = {
  name: '大神',
  sayname() {
    console.log(this.name)
  }
}

// module.exports = people
// exports.people = people
// exports.man = man
module.exports = {
  people,
  man
}