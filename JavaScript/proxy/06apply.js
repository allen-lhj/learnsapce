/*
 * @Autor: lhj
 * @Date: 2021-03-28 16:27:39
 * @LastEditTime: 2021-03-28 18:38:12
 */
var app = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments)
  }
}

var target = function() {
  return 'I am the target'
}

var handler = {
  apply: function() {
    return 'I am the proxy'
  }
}

var proxy = new Proxy(target, handler)

function Obj(n) {
  Obj.prototype.name = n
}
const obj = new Obj('das')
obj.name = 123
console.log(obj)
console.log(obj.hasOwnProperty('name'))
console.log(Reflect.ownKeys(obj))