require('./css/style.css');
var greet = require('./greet');

import Person from './Person';


// console.log('index.js');
// debugger;

greet.sayHello();
greet.sayName();


let person1 = new Person('Nag');
let person2 = new Person('Ria');

person1.sayName();
person2.sayName();