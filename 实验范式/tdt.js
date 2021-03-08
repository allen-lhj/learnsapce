var arr1 = ["MOP", "WEY", "HAR", "FIZ", "FOW", "KEM", "MES", "NUD", "RAN"]
var arr2 = ["MOP", "WEY", "HAR", "FIQ", "FVW", "KEM", "MAS", "NDD", "RSS"]

var tureAnswer = 0
for(i=0;i< 9;i++) {
  if (arr1[i] == arr2[i]) {
    tureAnswer += 1
    console.log('true')
  } else {
    console.log(false)
  }
}
console.log(tureAnswer)