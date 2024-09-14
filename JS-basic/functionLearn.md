ENG : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions \
中文 : https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions

函數中沒有使用 `return` 語句，則它預設回傳 `undefined`。使用 [new](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Operators/new) 調用一個[構造函數](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 除外
使用函數時 傳遞的東西 叫做參數

形參:函式定義中列出的參數，也稱為形式參數（`Formal Parameters`），形參是在定義函式時指定的變量名稱，代表在調用函式時傳入的實際參數值。

在函數執行時，[this 關鍵字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 並不會指向正在運行的函數本身，而是指向呼叫該函數的物件。所以，如果你想在函數內部取得函數本身的引用，只能使用函數名稱或使用 [arguments.callee](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Functions_and_function_scope/arguments/callee) 屬性( [嚴格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 下不可用)，如果該函數是一個匿名函數，則你只能使用後者。
```js
const person = {
    name: '小明',
    sayHello: function () {
        console.log(`你好，我的名字是 ${this.name}`);
    }
};
person.sayHello(); // 输出：你好，我的名字是 小明
const greet = person.sayHello;
greet(); // 输出：你好，我的名字是 undefined
```
函式沒有被任何對象(物件)所調用，即使它是在對象內部定義的，this 關鍵字在這種情況下將指向全局對象（在瀏覽器環境中通常是 window 對象），而全局範圍中沒有名為 name 的變量，所以 this.name 將是 undefined。這種情況下的 this 被稱為默認綁定（Default Binding）。\

[函數 Named Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E_%E5%87%BD%E6%95%B0%E8%AF%AD%E5%8F%A5)\
`function name([param[, param[, ... param]]]) { statements }`\

[函數表達式(匿名函式) Anonymous Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)\
```js
let function_expression = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
```
name :函數名稱。可省略，此種情況下的函數是匿名函數（anonymous）


[箭頭函式 Arrow Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)\


[回乎涵式 Callback Function](https://developer.mozilla.org/zh-TW/docs/Glossary/Callback_function)\
參看 see >> `./callback.js`

[立即調用函式 Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function)，[IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)\
`(function () {  // …})();`\
`(() => {  // …})();`\
`(async () => {  // …})();`

純函式（Pure Function）\

[構造函式（Function() constructor）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
```js
new Function(functionBody)
new Function(arg0, functionBody)
new Function(arg0, arg1, functionBody)
new Function(arg0, arg1, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg0, functionBody)
Function(arg0, arg1, functionBody)
Function(arg0, arg1, /* …, */ argN, functionBody)
```