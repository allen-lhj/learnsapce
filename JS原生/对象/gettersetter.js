let person = {
    firstName: 'Bill',
    lastName: 'Gates',
    language: 'en',
    get lang() {
        return this.language
    },
    set name(value) {
        return this.lastName = value
    }
}
console.log(person.lang)
person.name = 'sssss'
console.log(person.lastName)
