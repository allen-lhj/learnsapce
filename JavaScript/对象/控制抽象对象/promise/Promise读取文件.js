const fs = require('fs')

// fs.readFile('./hh.md', (err, data)=> {
//     //如果失败，则抛出错误
//     if(err) throw err
//     //如果没出错，则输出内容
//     console.log(data.toString())
// })

//使用Promsie封装
const P = new Promise(function(resolve, reject){
    fs.readFile('./hh.md',function(err,data){
        if(err){
            reject(err)
        }
        resolve(data)
    })
})
P.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log('读取失败')
})