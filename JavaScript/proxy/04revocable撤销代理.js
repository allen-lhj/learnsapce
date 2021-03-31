/*
 * @Autor: lhj
 * @Date: 2021-03-26 16:53:02
 * @LastEditTime: 2021-03-26 16:55:30
 */
const target1 = {
  name: 'lhj',
  age: 23
}

const handler = {
  get(targetType, property, receiver) { 
    return 'intercepted'
  }
}

const {proxy, revoke } = Proxy.revocable(target1, handler)

console.log(proxy.name)

revoke()

console.log(proxy.name) // TypeError
