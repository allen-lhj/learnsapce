
// console.log(a)
// var data = {
//   dept_id: 10001,
//   date: "2021-04-07",
//   state: 1,
//   fatigue: 30,
//   focus: 24,
//   cautel: 100,
//   calm: 0
//   }


function sum(arr) {
    var s = 0;
    for (var i = 0;i<arr.length;i++) {
        s += arr[i];
    }
    return s;
}
const map = new Map()
map.set(10001,  [{
  dept_id: 10001,
  date: "2021-04-07",
  state: 1,
  fatigue: 1,
  focus: 2,
  cautel: 1,
  calm: 1
  }])
  map.set(10002, [{
    dept_id: 10002,
    date: "2021-04-07",
    state: 1,
    fatigue: 1,
    focus: 1,
    cautel: 1,
    calm: 1
    },
    {
      dept_id: 10002,
      date: "2021-04-05",
      state: 1,
      fatigue: 2,
      focus: 1,
      cautel: 1,
      calm: 1
      }])
  // console.log(map)
const count = (arr) => {
    const ans = [0,0,0,0,0]

    for(let i = 0; i< arr.length; ++i) {
        ++ans[arr[i]]
    }
    const counts = [ans[1],ans[2],ans[3],ans[4]]
    const result = []
    for (let i = 0; i< counts.length; i++) {
        result.push(parseInt((counts[i]/ sum(counts)*100).toFixed(2)))
    }
    // console.log(result)
    return result
    // return [ans[1],ans[2],ans[3],ans[4]]

}
function t(map, key) {
    let filter = [];

    Array.from(map).map(item => {
        let it = [];
        item.map(n => {
            if (typeof n === 'object') {
                n.map(obj_key => {
                    it.push(obj_key[key]);
                });
            } else {
                it.push(n);
            }
        });
        let data = it.slice(1)
        data = count(data)
        data.unshift(it[0].toString())
        console.log(data)
        // filter.push(result)
        // filter.push(it);
        // console.log(it)

    });
    return filter;
}
console.log(t(map, 'fatigue'))

// const count = (arr) => {
//     const ans = [0,0,0,0,0]
//
//     for(let i = 0; i< arr.length; ++i) {
//         ++ans[arr[i]]
//     }
//
//     return [ans[1],ans[2],ans[3],ans[4]]
// }
