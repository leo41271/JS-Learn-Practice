// 命名函式（Named Function）在函式定義時給函式取一個名字的方式。這個名字可以在函式內部和外部使用，使得代碼更具可讀性和可維護性。命名函式的定義格式為 function 函式名稱(參數列表) { 函式體 }。
function NameFunction(a) {
    console.log('命名函式' + a)
}
NameFunction("abc");

// 匿名函式（Anonymous Function）沒有名字的函式，它可以作為值被賦予給變量或者作為另一個函式的參數。匿名函式的定義格式為 function(參數列表) { 函式體 }。
const AnonymousFunction = function (name) {
    console.log(`${name}! Hello.`);
};
AnonymousFunction("匿名函式Anonymous Function");

// 箭頭函式（Arrow Function）ES6 引入的一種新的函式定義方式，它具有簡潔的語法和綁定 this 的特性。箭頭函式的定義格式為 (參數列表) => 表達式或代碼塊。
// lambda JavaScript 中，lambda 函式通常指的是箭頭函式（Arrow Function）的簡稱
const ArrowFunction = (x) => "箭頭函式Arrow Function " + x * 2 + "\n";
console.log(ArrowFunction(9))

// 回呼函式（Callback Function）一種作為參數傳遞給其他函式，並在後者執行完特定任務後被調用的函式。通常用於處理異步操作，例如定時器、事件處理程序等。
function A_function(x) {
    console.log("A_function");
    x();
    //x參數等於B_function; //因此 x(); 就是等於 B_function();
};
function B_function(name) {
    console.log("B_function" + name);
};
A_function(B_function);

// 自我調用函式（立即調用函式）（Immediately Invoked Function Expression，IIFE）一種在定義後立即執行的函式，可以用來創建一個作用域，避免變量污染全局範圍。其定義格式為 (function() { 函式體 })()。
(function () {
    console.log('自我調用函式 立即函式');
})();

// 純函式（Pure Function）沒有副作用且對於相同的輸入始終返回相同結果的函式。它不會修改任何外部狀態，並且不依賴於外部狀態。
function PureFunction(x) {
    return x + 1;
}
console.log(PureFunction("PureFunction"));

// this 的限制
const person = {
    name: '小明',
    sayHello: function () {
        console.log(`你好，我的名字是 ${this.name}`);
    }
};
person.sayHello(); // 输出：你好，我的名字是 小明
const greet = person.sayHello;
greet(); // 输出：你好，我的名字是 undefined

// 構造函式（Function() constructor） 用於動態創建新的函式。接受任意數量的參數，最後一個參數是函式體，其餘的參數是新函式的參數名稱。呼叫 Function() 構造函式時，會根據傳遞的參數動態生成一個新的函式，並返回這個新函式的引用。
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6)); // 8