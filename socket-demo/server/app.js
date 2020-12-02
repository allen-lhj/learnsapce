const ws = require('nodejs-websocket')


var server = ws.createServer(conn => {
    console.log('前台连接成功')
    var data = [];
    function randomData() {
        now = new Date()
        value = Math.random() * 1000 + 10;
        return {
            name: now.toString(),
            value: [
                [String(now.getHours()).padStart(2,'0'), String(now.getMinutes()).padStart(2,'0'), String(now.getSeconds()).padStart(2,'0')].join(':'),
                Math.round(value)
            ]
        }
    }  
     setInterval(function () {
        data.push(randomData())
        conn.send(JSON.stringify(data))
        if(data.length>10){
            data.shift()
        }
    },2000)
    
    conn.on('close', () => {
        console.log('连接断开了')
    })
    conn.on('error', () => {
        console.log('用户连接异常')
    })
})


server.listen(3001, () => {
    console.log('服务启动成功！')
})
 // var data = [];
    // var now = +new Date(1997, 9, 3);
    // var oneDay = 24 * 3600 * 1000;
    // var value = Math.random() * 1000;
    // function randomData() {
    //     now = new Date(+now + oneDay);
    //     value = value + Math.random() * 21 - 10;
    //     return {
    //         name: now.toString(),
    //         value: [
    //             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
    //             Math.round(value)
    //         ]
    //     };
    // }
    //-----