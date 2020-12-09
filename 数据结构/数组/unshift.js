Array.prototype.insertFirstPostion = function(value) {
  for (let i = this.length;i >= 0; i --) {
    this[i] = this[i - 1]
  }
  this[0] = value
}
numbers.insertFirstPostion(-1)