function foo(num) {
    console.log('foo: ' + num)
    this.count++
    console.log(this._count)
}

foo.count = 0 // 给foo添加一个count变量

for( let i = 0; i < 10; i ++) {
    foo(i)
}
console.log(foo.count)
