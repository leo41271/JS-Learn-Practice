// Pass a JavaScript function as parameter 參數傳遞函式方法與callback function
// https://stackoverflow.com/a/13286241/11493041
// https://stackoverflow.com/a/24091927/11493041
function lll(id, eee) {
  eee();
  // You can also pass arguments if you need to
  // refreshCallback(id);
  // ---------------
  // How would it look like to pass an anonymous function instead of a pre-defined one ?
  addContact(1, function (id) {
    console.log("anonymous function  " + id);
  });
}
function ggg() {
  console.log("Hello World");
}
function addContact(a, callback) {
  callback;
  console.log(a);
}
lll(1, ggg);

// ---------------
function foo(x) {
  console.log(x);
}
function bar(func) {
  console.log("bar 111");
  func("func Hello World!");
  console.log("bar 222");
}
bar(foo);

function foo2(x) {
  console.log(x);
}
function bar2(func) {
  console.log("11111");
  func();
  console.log("22222");
}
//alerts "Hello World!" (在 bar 內部被傳遞後執行)
bar2(function () {
  // 穿插其他 code 邏輯
  foo2("Hello World!"); // 穿插其他 code 邏輯
});

// ---------------
// how to pass a function with arguments ? 傳遞帶有參數的函式方法?
function eat(food1, food2) {
  console.log("eat eat eat" + food1 + "  " + food2);
}
function myFunc(callback, args) {
  console.log("!!!!!");
  callback.apply(this, args);
  console.log(args);
}
//alerts "I like to eat pickles and peanut butter"
myFunc(eat, ["pickles", "peanut butter"]);
// 參看 apply MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// ---------------
// https://www.geeksforgeeks.org/passing-a-function-as-a-parameter-in-javascript/
function geeks_inner(value) {
  return "hello " + value;
}
function geeks_outer(a, func) {
  console.log(func(a));
}
geeks_outer("Geeks!", geeks_inner); // hello Geeks!
// ----------------
function geeks_inner2() {
  return "hello User!";
}
function geeks_outer2(func) {
  console.log("func", func); // func [Function: geeks_inner2]
  console.log("geeks_inner2()", geeks_inner2()); // geeks_inner2() hello User!
}
geeks_outer2(geeks_inner2);
