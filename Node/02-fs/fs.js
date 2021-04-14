var fs = require("fs");


// 异步读取
fs.readFile('file.json', function (err, data) {
   if (err) {
       return console.error(err);
   }
   let arr = {};
   arr = JSON.parse(data)
});
// 
// const groups = await fetchGroup(this.period[0], this.period[1])
// this.groupOptions = groups
// groups.forEach(index => {
//   this.groupDict[index.id] = index
// })
// if (groups.length > 0) {
//   this.groupId = groups[0].id
//   this.getData()
// } else {
//   this.listLoading = false
// }
