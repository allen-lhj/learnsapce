/*
 * @Autor: lhj
 * @Date: 2021-03-25 14:32:41
 * @LastEditTime: 2021-03-25 15:01:31
 */
let book = {
  year_: 2017,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get() {
    return this.year_;
  },
  set(newVal) {
    if (newVal > 2017) {
      this.year_ = newVal
      this.edition += newVal -2017
    }
  }
})

console.log(Object.getOwnPropertyDescriptor(book, 'year'))