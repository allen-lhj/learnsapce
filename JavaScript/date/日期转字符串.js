/*
 * @Autor: lhj
 * @Date: 2021-03-26 22:42:45
 * @LastEditTime: 2021-03-28 12:23:13
 */
// const t = new Date()
// // 从日期中选出小时和分钟
var formatDate = function (date) {  
  var h = date.getHours().toString();  
  h = h < 10 ? ('0' + h) : h.toString();
  var minute = date.getMinutes();  
  minute = minute < 10 ? ('0' + minute) : minute.toString();
  return h+minute;  
};
// console.log(formatDate(t))
// var t = ['1601','1854']

// function formt(date) {
//   let date1 = date[0].slice(0,2)
//   let date2 = date[0].slice(2)
//   let date3 = date[1].slice(0,2)
//   let date4 = date[1].slice(2)
//  return date1 + ':' + date2+ '-'+ date3 + ':' + date4
// }
// formt(t)
const t = [new Date(), new Date()]
// const s = [new Date(), new Date()]
const s = null
var formatDateList = function(date, date2) {
  if (date&&!date2) {
    let time1 = date[0]
    let time2 = date[1]
    return [formatDate(time1), formatDate(time2)]
  } else if (date&&date2) {
    let time1 = date[0]
    let time2 = date[1]
    let time3 = date2[0]
    let time4 = date2[1]
    return [formatDate(time1), formatDate(time2), formatDate(time3), formatDate(time4)]
  }else if (!date&&date2) {
    let time3 = date2[0]
    let time4 = date2[1]
    return [formatDate(time3), formatDate(time4)]
  }
}
console.log(formatDateList(t, s))
// formatDateList(n)
// console.log([ '4342', '6342' ].concat(null))
// const a = [ '1350', '1850', '1051', '1451' ]
// function changeDate(date) {
//   datelist = []
//   date.forEach((item, index) => {
//     let h = parseInt(item.slice(0,2))
//     let m = parseInt(item.slice(2))
//     let time = new Date()
//     time.setHours(h)
//     time.setMinutes(m)
//     datelist.push(time)
//   })
//   console.log(datelist)
// }
// changeDate(a)