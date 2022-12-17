
// // Function
// // - fundamental building block in the program
// // - subprogram can be uesd multile times
// // - performs a task or caculates a value

// // 1. Function declaration
// // function name(param1, param2)  body... return }
// // one function === one thing
// // naming: doSomething, command, verb
// // e.g. createCardAndPoint -> createCard, createPoint
// // function is object in JS

// function  printHello() {
//     console.log('Hello');
// }
// printHello();

// function log(message) {
//     console.log(message);
// }
// log('Hello@');
// log(1234);


// // 2. Parameters
// // premitive parameters: passed by value
// // object parameters: passed by reference
// function  changeName(obj) {
//     obj.name = 'coder';
// }
// const ellie = { name: 'ellie' };
// changeName(ellie);
// console.log(ellie); // corder


// // 3. Default parameters (added in ES6)
// function  showMessage(message, from = 'unknown') {
//     console.log(`${message} by ${from}`);
// }
// showMessage('Hi!'); // Hi! by undefined가 뜬다 from에 원하는 디폴트값을 정하면 된다.


// // 4.Rest parameters (added in ES6)
// function  printAll(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]); // dream, coding, ellie
//     }
//     for (const arg of args) {   // 다른 방법으로도 할 수 있다.
//         console.log(arg);
//     }
//     args.forEach((arg) => console.log(arg)); // forEach문을 통해서 할 수 도있다.
// }
// printAll('dream', 'coding', 'ellie');


// // 5. Local scope
// let globalMessage = 'global'; // global variable
// function  printMessage() {
//     let message = 'heelo'; // lcal variable 블록 안에서 변수를 선언하게 되면 지역변수, 지역에서만 할당된다고 보면 된다
//     console.log(message);
//     console.log(globalMessage); // global
//     function printAnother() {
//         console.log(message);
//         let childMessage = 'hello';
//     }
//    // console.log(childMessage); // error
// }
// printMessage();
// // console.log(message); // error


// // 6. Return a value
// function sum(a, b) {
//     return a + b;
// }
// const result = sum(1, 2);    //3
// console.log(`sum: ${sum(1, 2)}`);


// // 7. Early return, early exit
// // bad
// function  upgradeUser(user) {
//     if (user.point > 10) {  // 블록 안에 로직을 많이 사용하면 가독성이 떨어진다.
//         // long upgrade logic...
//     }
// }

// // good
// function  upgradeUser(user) {
//     if (user.point <= 10) {
//         return;     // 조건이 맞는 거만 빠르게 리턴해서 사용하는 게 좋다.
//     }
//     // long upgrade logic...
// }



// // First-class function
// // function are treated like any other variable
// // can be assigned as a value to variable
// // can be passed as an argument to other function.
// // can be returned by another function

// // 1. Function expression
// // a function declaration can be called earlier then it is defiend. (hoisted)
// // a function expressin is created when the exeution reches it.
// const print = function () { // anonymous function 이름이 있는 함수는 naming function
//     console.log('print');
// };
// print();    // print
// const printAgain = print;
// printAgain();   // print
// const sumAgain = sum;
// console.log(sumAgain(1, 3)); // 4  위에(6번) 동일하게 만들어 놓아서 이 결과값이 나온다.


// // 2. Callback function using function expression
// function randomQuiz(answer, printYes, printNo) {
//     if (answer === 'love you') {
//         printYes();
//     } else {
//         printNo();
//     }
// }
// // anonymous function
// const printYes = function () {
//     console.log('yes!');
// };

// // named function
// // better debugging in debugger's stack traces
// // recursions
// const printNo = function print() {
//     console.log('no!');
//     // print(); 함수가 함수안에서 자기 자신을 부르는 것을 리컬젼 무한출
//     // 피보나치수나, 반복되는 평균값 특별한 케이스말고 사용하지말자.
// };
// randomQuiz('wrong', printYes, printNo); // no!
// randomQuiz('love you', printYes, printNo)   // yes!


// // Arrow function
// // alwats anonymous
// // const simplePrint = function () {
// //     console.log('simplePrint');
// // };

// const simplePrint = () => console.log('simplePrint!');
// const add = (a, b) => a + b;
// const simpleMultiply = (a, b) => {
//     // do something more
//     return a * b;
// };

// // IIFE: Immediately Invoked Function Expression
// (function hello() {
//     console.log('IIFE'); // 함수를 바로바로 실행시키는 것
// })();

// // Fun quiz time
// // function calculate(command, a, b)
// // command: add, substract, divide, multiply, remainder



// function add(num1, num2) {
//     return num1 + num2
// };

// function divide(num1, num2) {
//     return num1 / num2
// }


// function suprise(operator) {
//     const result = operator(2, 3); // add(2, 3)
//     console.log(result);
// }

// suprise(divide);


// class Counter {
//   constructor () {
//     this.counter = 0;
//   }

//   increase() {
//     this.counter++;
//     console.log(this.counter);
//   }
// }

// const coolCounter = new Counter();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();







// 인자가 없을 때 함수 작동
// 매개변수가 있는 함수

// function sayHello(name) {
//   let msg = `Hello `;

//   if (name) {
//     msg += `, ${name}`;
//   }

//   console.log(msg);
// }


// sayHello();



//////////////////////////////////////////

// 변수를 함수 외부에서 사용하고 싶을 때
// let msg = `Hello`;

// function sayHello(name) {
//   if (name) {
//     msg += `, ${name}`;
//   }
//   console.log(msg);
// }

// sayHello();
// sayHello('Mike');
// // console.log(msg);

//////////////////////////////////////////

// 전역 변수와 지역 변수

// let msg = "Welcome";  // welcome
// console.log('호출 전')
// console.log(msg);

// function sayHello(name) {
//   let msg = "Hello"
//   console.log('내부 함수');
//   console.log(msg + " " + name);  // Hello Mike
// }

// sayHello('Mike');
// console.log('호출 후')
// console.log(msg);  // welcome


///////////////////////////////////////////

// let name = "Mike";

// function sayHello(name) {
//   console.log(name);
// }

// sayHello();
// sayHello('Jane');



// OR

// function sayHello(name) {
//   let newName = name || 'friend';
//   let msg = `Hello, ${newName}`
//   console.log(msg);
// }

// sayHello();
// sayHello('Jane');
///////////////////////////////////////////

// function sayHello(name = 'friend') {
//   let msg = `Hello, ${name}`
//   console.log(msg);
// }

// sayHello();
// sayHello('Jane');
////////////////////////////////////////////

// 콜백함수 

// function checkMood (mood) {
//   if (mood === 'good') {
//     // 기분 좋을 때 하는 동작
//     sing();

//   } else {
//     // 기분 안 좋을 때 하는 동작
//     cry();
//   }
// }

// function cry () {
//   console.log("ACTION : CRY");
// }

// function sing() {
//   console.log("ACTION : SING")
// }

// function dance() {
//   console.log("ACTION : DANCE")
// }

// checkMood("bad");

////////////////////////////////////////////
// 콜백 함수 원리
// function first(second) {
//   console.log(1);
//   second();
// }

// function second() {
//   console.log(2);
// }
// first(second)

/////////////////////////////////////////////

// db.collection('post').findOne(A, function() {
//   db.collection('post').findOne(B, function() {
//     db.collection('post').findOne(B, function() { 
//       ////// DB에서 데이터 뽑고 싶다 근데 A뽑고 그 다음 B뽑고 그 다음 C뽑고 그러면 코드가 길어지고 문제가 생긴다.
//     })
//   })
// })


// forEach

// const values = [10, 11, 12, 13, 14];

// values.forEach((element, index) => {
//   console.log(
//     `value : ${element}, index : ${index} `
//   );
// })

/////////////////////////////////////////////////

// forEach === for문

// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// 이전
// for (let i = 0; i < items.length; i++) {
//   copy.push(items[i]);
// }

// 이후
// items.forEach(function(item){
//   copy.push(item);
// });

// console.log(copy);

///////////////////////////////////////////////

// map

// const arr = [1, 2, 3, 4];
// const result = [];

// for (let i = 0; i < 4; ++i) {
//   result.push(arr[i] * 2);
// }

// // const result = arr.map((element, i) => {
// //   console.log(element * 2);
// // });
// console.log(arr);