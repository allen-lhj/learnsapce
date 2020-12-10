class Foo {
    static classMethod() {
        console.log('Hello')
        return 'Hello'
    }
}
Foo.classMethod() // 'Hello'

var foo = new Foo()
// foo.classMethod() // TypeError: foo.classMethod is not a function

class Bar extends Foo{

}

Bar.classMethod()
