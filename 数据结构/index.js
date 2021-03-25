
function refreshCode() {
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',//62个字符 随机选择4位
        char = '',
        result = '';
    for (var i = 0; i < 3; i++) {
        var code_index = Math.round(Math.random()*23);
        var char = code[code_index];
        if (result.toUpperCase().indexOf(char.toUpperCase()) > -1) {
            i --;
            continue;//终止本轮循环 进行下一轮
        }
        result += char;
    }
    console.log(result)
}

function Code() {
    var yuancode = 'AEIOU',
        fucode = 'BCDFGHJKLMNPQRSTVWXYZ',
        ychar = '',
        fchar = '',
        result = '';
    var ycode_index = Math.round(Math.random()*4);
    var ychar = yuancode[ycode_index];
    for (var i = 0; i < 2; i++) {
        var fcode_index = Math.round(Math.random()*20);
        var fchar = fucode[fcode_index];
        if (result.indexOf(fchar) > -1) {
            i --;
            continue;
        }
        result += fchar
    }
    console.log(result.inser)
}
setInterval(() => {
    Code()
},2000)
