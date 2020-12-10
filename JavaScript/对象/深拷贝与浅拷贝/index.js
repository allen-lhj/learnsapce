var obj1 = {
    name: '陈冠希',
    age: '20',
    language: [1,[2,3],[4,5]]
}
//将obj1赋值给obj2
var obj2 = obj1
//修改obj2的属性，obj1的属性也被修改，因为他们引用的仍同一个对象
obj2.name = '阿娇'
console.log(obj1)//{ name: '阿娇', age: '20', language: [ 1, [ 2, 3 ], [ 4, 5 ] ] }
function copy(obj) {
    var dist = {}
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)){
            dist[prop] = obj[prop]
        }
    }
    return dist
}
var obj3 = copy(obj1)
console.log(obj3)
obj3.name = '王思聪'//浅拷贝修改对象的基本类型不会修改原对象的属性，
console.log(obj1)//{ name: '阿娇', age: '20', language: [ 1, [ 2, 3 ], [ 4, 5 ] ] }
obj3.language[1] = [0,0]
console.log(obj1)