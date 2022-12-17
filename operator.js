

// 1. String concatenation
// ''', \', \n, \t 특수 문자열은 따로 검색해서 찾아보자
console.log('my' + 'cat');  // mycat
console.log('1' + 2);   // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3


// 2. Numeric operatiors
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // ++앞에 있으면 counter의 값이 증가하고 할당한다.
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++ // ++뒤에 있으면 counter의 값이 먼저 변수에 할당한 다음에 counter가 증가한다
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);    // less then
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 <= 6);   // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 앞에서부터 true이면 연산을 끝내기 때문에 보통 연산이 적을 수록 앞에 배치하는 게 좋다
console.log(`or: ${value1 || value2 || check()}`); // or: true

// && (and), finds the firstt falsy value
console.log(`and: ${value1 && value2 && check()}`); // and: flase

// often used to compress long if-statement
// nullableObject && nullableObject.something
// and는 null을 찾을 때도 쓴다.
if (nullableObject != null) {
    nullableObject.something;
}


function check() {
    for (let i = 0; i < 10; i++) {
        // wating time
        console.log('');
    }
    return true     // check함수는 기다렸다가 true를 반환하는 함수
}

// ! (not)
console.log(!value1);   // false


// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);   // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // true
console.log(stringFive !== numberFive); // false

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(elli1 == ellie2);   // false
console.log(elli1 == ellie2);   // false
console.log(elli1 == ellie3);   //true

// equality - puzzler
console.log(0 == false);    // true 0은 false로 간주된다
console.log(0 === false);    // false 0은 boolean type이 아니기 때문에
console.log('' == false);   // true
console.log('' == false);   // false boolean type 아니다
console.log(null == undefined); // true
console.log(null === undefined);   // flase 다른 type이기 떄문에


// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`); // while: 3, while: 2, while: 1
    i--;
}

// do while loop, body code is ecuted first,
// then check the condition
do {
    console.log(`do while: ${i}`); // do while: 0 먼저 출력을 먼저하고 나서 whlie을 실행
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops 시간복잡도가 0(n^2)이다 cpu에 좋지않아 왠만하면 피하는게 좋다
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
    for (let i = 0; i <= 10; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        console.log(`q1. ${i}`);
    }
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
    for (let i= 0; i <= 10; i++) {
        if (i > 8) {
            break;
        }
        console.log(`q2. ${i}`);
    }

