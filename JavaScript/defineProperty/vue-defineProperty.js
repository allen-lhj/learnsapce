/*
 * @Autor: lhj
 * @Date: 2021-03-25 15:11:06
 * @LastEditTime: 2021-03-25 15:13:31
 */
Object.defineProperty(obj, key, {
  enumerable: true,   // 可以通过for in 遍历
  configurable: true,
  get: function reactiveGetter () {
    // ...
    if (Dep.target) {
      // 收集依赖
      dep.depend()
    }
    return value
  },
  set: function reactiveSetter (newVal) {
    // ...
    // 通知视图更新
    dep.notify()
  }
})