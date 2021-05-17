const date = ['2021-02-16', '2021-02-20']

function tarns(dateArr) {
  const ti = new Date(dateArr[1]).getTime() - new Date(dateArr[0]).getTime()
  var dayDiff = Math.floor(ti / (24 * 3600 * 1000))+1
  const a = new Array(dayDiff).fill(1).map((item, i) => new Date(new Date(dateArr[0]).getTime() + (1000 * 60 * 60 * 24*i)))

  console.log(a)
}
var ti = new Date(date[1]).getTime() - new Date(date[0]).getTime()
var dayDiff = Math.floor(ti / (24 * 3600 * 1000))

// tarns(date)

// 2
function transformDate(dateArr) {
  let start = new Date(dateArr[0]).getTime()
  const end = new Date(dateArr[1]).getTime()
  const arr = []
  while(start<=end) {
    console.log(start)
    let day = new Date(start)
    arr.push(`${day.getFullYear()}-${(day.getMonth() + 1)}-${day.getDate()}`)
    start += 86400000
  }
  console.log(arr)
}
transformDate(date)
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
// const a = new Array(7).fill(1).map((n,i)=>
// new Date(new Date('2021-05-26').getTime() + (1000 * 60 * 60 * 24*i)))
// var b = parseTime(a[0],'{y}-{m}-{d}')
// console.log(b)

// console.log(new Array(7).fill(1))
