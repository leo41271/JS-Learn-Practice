// Spread 展開
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// REST 剩餘運算符
// 展開語法(spread syntax)允許在函數呼叫時或陣列字面值中，將可迭代的對象（如陣列或字串）擴展成零個或多個參數或元素。
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const { a, b, ...rest2 } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(b); // 2
console.log(rest2); // { c: 3, d: 4 }

function exampleFunction(a, b, c) {
  console.log(arguments[0], arguments[1], arguments[2]); // 顯示命名參數 a 的值 // 1 // 顯示命名參數 b 的值 // 2 // 顯示命名參數 c 的值 // 3
  console.log(a, b, c); // 顯示命名參數 a 的值 // 1 。b 的值 // 2 。c 的值 // 3
  arguments[0] = 10; // 將 arguments 物件的索引 0（對應到 a）重新賦值為 10
  console.log(arguments[0]); // 顯示更新後的值 // 10
  a = 20; // 將命名參數 a 重新賦值為 20
  console.log(arguments[0]); // 顯示 arguments 物件的索引 0（對應到 a）的值，仍然是 10，並未同步更新 // 20
  console.log(a); // 顯示更新後的值，即 20 // 20
}
exampleFunction(1, 2, 3);

// 剩餘參數（rest parameter）不會被計算在函數的 length 屬性中。

// 餘參數（rest parameters）和 arguments 物件之間的主要區別有三點：
// arguments 物件非真正陣列，而餘參數是陣列實例，表示可直接用陣列本身有的方法，如 sort()、map()、forEach() 或 pop()。
// arguments 物件有額外的（已被廢棄的）callee 屬性。在嚴格模式下，callee 已被淘汰並且不推薦使用。
// 在非嚴格模式的函數中，當使用簡單參數時，arguments 物件會與參數的值同步其索引。剩餘參數陣列在重新分配命名參數時不會更新其值。也就是說，arguments 物件的索引與命名參數的值保持同步，而餘參數陣列在重新賦值命名參數時不會更新其值。
// 餘參數將所有額外的參數捆綁成單一陣列，但不包含在 ...restParam 之前定義的任何命名參數。arguments 物件包含所有參數，包括 ...restParam 陣列中的參數，捆綁在一個類似陣列的物件中。
