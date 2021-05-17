const items= [
  {
  dept_id: 10002,
  date: "2021-04-06",
  state: 1,
  fatigue: 30,
  focus: 15,
  cautel: 100,
  calm: 0
  },
  {
  dept_id: 10002,
  date: "2021-04-09",
  state: 1,
  fatigue: 36,
  focus: 30,
  cautel: 99,
  calm: 0
  },
  {
  dept_id: 10002,
  date: "2021-04-02",
  state: 1,
  fatigue: 30,
  focus: 18,
  cautel: 100,
  calm: 0
  },
  {
  dept_id: 10002,
  date: "2021-04-07",
  state: 1,
  fatigue: 30,
  focus: 30,
  cautel: 100,
  calm: 0
  },
  {
  dept_id: 10001,
  date: "2021-04-09",
  state: 1,
  fatigue: 30,
  focus: 0,
  cautel: 100,
  calm: 0
  },
  {
  dept_id: 10002,
  date: "2021-04-08",
  state: 1,
  fatigue: 30,
  focus: 30,
  cautel: 100,
  calm: 0
  },
  {
  dept_id: 10001,
  date: "2021-04-07",
  state: 1,
  fatigue: 30,
  focus: 24,
  cautel: 100,
  calm: 0
  }
  ]

const data = [{
  dept_id: 10001,
  date: "2021-04-07",
  state: 1,
  fatigue: 30,
  focus: 24,
  cautel: 100,
  calm: 0
  }]

  function tarnsformFatigue(fatigue) {
    if (fatigue >= 0 && fatigue < 40) {
      fatigue =  1
    } else if (fatigue > 41 && fatigue < 60) {
      fatigue = 2
    } else if (fatigue > 61 && fatigue < 80) {
      fatigue = 3
    } else if (fatigue > 81 && fatigue <= 100) {
      fatigue = 4
    }
  }
  function mergeObj(s1) {
    // const keys = Object.keys(s1)
    // for (const key in s1) {
    //   if (key === 'dept_id' || key === 'state' || key === 'date') continue
      
    // }
    s1.forEach(item => {
      item
    })
  }
  mergeObj(data)
// const arrayToMap = (arr) => {
  
//   // const mergeObj = (s1, s2) => { // 之前存的对象{}, 再次遇到的相同对象{}
//   //   const keys = Object.keys(s1);

//   //   for (const key of keys) {
//   //     if (typeof s1[key] !== "number" || key === "dept_id") continue;
//   //     if (s1[key].length > 0) {
//   //       console.log(11)
//   //       s1[key].push(s2[key])
//   //     } else {
//   //       const temp = []
//   //       temp.push(s1[key],s2[key])
//   //       s1[key] = temp
//   //     }
//   //   }
//   // };
//   const map = new Map();

//   for (let i = 0; i < arr.length; ++i) {
//     // 第二次遇到
//     if (map.has(arr[i].dept_id)) {
//       console.log(55)
//       mergeObj(map.get(arr[i].dept_id), arr[i]);
//     } else {
//       map.set(arr[i].dept_id, arr[i]);
//     }
//   }

//   console.log(map);

//   return Array.from(map.entries()).reduce((acc, cur) => {
//     acc[cur[0]] = cur[1];

//     return acc;
//   }, {});
// };
// arrayToMap(items)
