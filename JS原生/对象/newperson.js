function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function() {
        alert(this.name)
    }
}
var person = new Person('ss', 29, 'Doctor')
// console.log(person.job)
Person('Grap', 30, 'engnnei')
var o = new Object()
Person.call(o, 'Jess', 25, 'Nurse')
console.log(o.age)