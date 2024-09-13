var _ = require("lodash");
var objects = [
  { a: 1 },
  { b: 2 },
  { gg: [{ ge: 66, arr: [666, 777, 888, { nono: { dd: "99" } }] }, "tt"] },
];
var deep = _.cloneDeep(objects);
var low = _.clone(objects);
console.log(deep[2].gg[0].arr[3], "deep"); // { nono: { dd: '99' } } deep
console.log(low[2].gg[0].arr[3], "low"); // { nono: { dd: '99' } } low
objects[2].gg[0].arr[3] = "更改後";
console.log(deep[2].gg[0].arr[3], "deep"); // { nono: { dd: '99' } } deep
console.log(low[2].gg[0].arr[3], "low"); // 更改後 low
console.log(objects[2].gg[0].arr[3], "444"); // 更改後 444