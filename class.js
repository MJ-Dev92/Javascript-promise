
'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methode
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('eille', 20);
console.log(ellie.name);    // eille
console.log(ellie.age); // 20
ellie.speak();  // eille: hello!


// 2. Getter and setters
class User {
    constructor(firstaName, lastName, age) {
        this.firstName = firstaName
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // 0


// 3. Fields (public, private)
// Too soon!
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// 쓰기가 아직 어렵다 이런게 있다고만 생각하자
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined


// 4 Static properties and methods
// Too soon!
// 쓰기가 아직 어렵다 이런게 있다고만 생각하자
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static  printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Dream Coding
Article.printPublisher();   // Dream Coding


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`); // drawing blue or red color!
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends  Shape {}
class Triangle extends  Shape { // 필요한 함수만 재정의 하는 것을  오버라이딩이라고 한다.
    draw() {
        super.draw(); // 부모의 메소드를 호출하고 싶을 때 super사용
        console.log('^');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea()); // 200


// 6. Class checking: instanceOf
// 왼쪽에 있는 아이가 오른쪽 클래스를 이용해 만들어진 아이인지 아닌지 판별하는 속성
console.log(rectangle instanceof  Rectangle);  // true
console.log(triangle instanceof  Rectangle);  // false
console.log(triangle instanceof  Triangle);  // true
console.log(triangle instanceof  Shape);    //true
console.log(triangle instanceof  Object);  //true

// javaScript reference (mdn) 자바스크립트 내부에 포함 되어있는 오브젝트는 무엇이 있는지 카테고리 별로 알 수 있다.


