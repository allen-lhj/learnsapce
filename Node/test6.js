function parseTime(time, cFormat, unit = 's') {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && unit === 's') {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

const result = [
  {state: 1,fatigue: 20, time: 1619532196640},
  {state: 3,fatigue: 20, time: 1619532196640},
  {state: 2,fatigue: 40, time: 1619532217433},
  {state: 5, time: 1619532217433},
]
console.log(parseTime(result[0].time, '{h}:{i}:{s}'))

const data = result.filter(item => item.state < 5)
console.log(data)
const data1 = []
var timer = 0
data.map(item => {
  if (timer = item.time) {
    data1.push([item.time,])
  }
  timer = item.time
})