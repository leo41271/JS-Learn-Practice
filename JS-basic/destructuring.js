// Destructuring 解構
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};
// 基本解構賦值
const { name, age } = person;
console.log(name, age); // 25
// 使用別名
const { name: fullName, age: years } = person;
console.log(fullName, years); // 25
// 嵌套解構
const {
  address: { city, zip },
} = person;
console.log(city, zip); // Wonderland 12345
// 使用剩餘運算符（Rest operator）
const { name: firstName, ...restProps } = person;
console.log(firstName, "\n", restProps); // Alice  // { age: 25, address: { city: 'Wonderland', zip: '12345' } }

// 陣列參數解構
function printCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}
printCoordinates([10, 20]); // X: 10, Y: 20
function printCoordinatesRest([x, y, ...z]) {
  console.log(`X: ${x}, Y: ${y}, \nZ: ${z}, \nZ[1]: ${z[1]}`);
}
printCoordinatesRest([10, 20, 30, 40, 50, 60]); // X: 10, Y: 20, Z: 30,40,50,60, Z[1]: 40
// 物件參數解構
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printPerson({ name: "Alice", age: 25 }); // Name: Alice, Age: 25
