/*
 * @Autor: lhj
 * @Date: 2021-03-26 15:47:52
 * @LastEditTime: 2021-03-26 16:20:10
 */

 const target = {
   foo: 'bar'
 }

 const handler = {
   get() {
     return 'handle override'
   }
 }

 const proxy = new Proxy(target, handler);
// 访问原对象属性
 console.log(target.foo) // foo
 // 访问代理对象属性，被拦截
 console.log(proxy.foo) // handle override

 // get捕获器的三个参数： 目标对象，要查询的属性，代理对象

 const target1 = {
   foo: 'bar'
 }

 const handler1 = {
   get(trapTarget, property, receiver) {
     // 返回目标对象的属性
     return trapTarget[property]
   }
 }

 const proxy1 = new Proxy(target1, handler1)

 console.log(proxy1.foo)
