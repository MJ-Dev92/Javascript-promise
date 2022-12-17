// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
// 1. Literals and properties
const obj1 = {} // 'object literal' syntax
const obj2 = new Objcet(); // 'object constructor' syntax

function  print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie); // ellie 4

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);  // true

// can delete properties later
delete ellie.hasJob
console.log(ellie.hasJob);  // undefined


// 2. Computed properties
// key should be always string
console.log(ellie.name); // ellie
console.log(ellie['name']); // ellie
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

function  printValue(obj, key) { //dot 과 computed propertie의 차이
    console.log(obj.key); // undefined
    console.log(obj[key]); // ellie
}

printValue(ellie, 'name');
printValue(ellie), 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'deve', age: 4 };
const person4 = new Person('ellie', 30)
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// function makePerson(name, age) {
//     return {
//         name,   // key와 value가 같으면 생략할 수 있다.
//         age : age,
//     };
// }


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // flase
console.log(ellie.random); // undefined


// 6. for..in vs for..of
// for (key in obj) object 안에 있는 값들 가져오기
console.clear(); // 이전꺼는 지우기
for (key in ellie) {
    console.log(key); // name age hasJob
}

// for (value of iterable) 배열을 순차적으로 나타내고 싶을 때 사용
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);  // 1 2 4 5
}
// for (let i = 0; i < array.length; ++i) {
//     console.log(array[i])
// }


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'corder';
console.log(user); // name : coder, age: 20

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Objcet.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color : 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);   // blue
console.log(mixed.size);    // big