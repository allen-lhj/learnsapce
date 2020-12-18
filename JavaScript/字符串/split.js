// axios将字符串headers转为对象
var headers = 'date: Fri, 05 Apr 2019 12:04:49 content-type: application/json;charset=utf-8'
let parsed = Object.create(null)
headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    parsed[key] = val
})
console.log(parsed)
