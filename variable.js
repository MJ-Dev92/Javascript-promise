// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// 바닐라 자바스크립트로 개발할 때는 파일 제일 위에 'use strict' 선언해 주면서 strict mode로 개발하는 것을 추천한다.
// strict mode로 개발할 때는 조금 더 상식적인 범위 안에서 자바스크립트를 이용할 수 있다.
// 자바스크립트 엔진의 성능이 개선된다.

// 1. Use strict
// added ECMAScript 5
// use this for Valina Javascript
'use strict';
console.log('Hellow World!');

a = 6;  // 선언되지 않는 변수를 use strict 사용해야 에러가 뜬다. let a; 선언해 줘야 한다.


// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'
{ // block scope - block scope를 사용하면 밖에서 block 안을 볼 수 없다.
    let name = 'minjae';
    console.log(name);
    name = 'hello'
    console.log(name) // hello 출력
}
console.log(name) // 아무값도 출력되지 않는다.
console.log(globalName) // golbal name

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) 값을 선언하기도 전에 쓸 수 있다.
// has no block scope
{
    console.log(age); // undefined
    age = 4; // 에러가 뜨지 않는다.
    console.log(age); // 4
    var age;
}
console.log(age) // 4


// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i,e, object,freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always(값이 변하지 않는 타입) for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive. single item: number, string, boolean, null, undefined, symbol
// object, box container
// fuction, first-class function

const count = 17; // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);  // Infinity
console.log(negativeInfinity);  // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234203423904829034n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // value: 1234203423904829034n type: bigInt

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value:' + helloBob + 'type:' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, '
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`)   // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`)         // value: false, type: boolean

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof  x}`); // value: undefined, type: undefined

// symbol, create unique, identifiers for objects
// 고유한 식별자를 만들 때 사용 string과 다름
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);       // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);     // true
console.log(`value: ${symbol1.description}, type: ${typeof  symbol1}`); // symbol은 그냥 쓰면 에러가 나기 때문에 description 같이 쓴다.

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof  text}`);   // value: hello, type: string
text = 1;
console.log(`value: ${test}, type: ${typeof  text}`);   // value: 1, type: number
text = '7' + 5;
console.log(`value: ${test}, type: ${typeof  text}`);   // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof  text}`);   // value: 4, type: number
