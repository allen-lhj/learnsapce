/*
 * @Autor: lhj
 * @Date: 2021-03-26 15:20:45
 * @LastEditTime: 2021-03-26 15:25:30
 */
// 代理由构造函数创建，必须接受两个参数，要被代理的目标对象和处理程序对象，缺少任何一个都会报错，创建空代理可以使用简单
//的对象字面量

const target = {
  id: 'target'
}

const handler = {};

const proxy = new Proxy(target, handler);

console.log(target.id)
console.log(proxy.id)

// 给代理属性赋值会反映在两个对象上，因为两个对象访问的是同一个值
proxy.name = 'dell'
console.log(target.name)


