// es5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName=function() {
//     console.log('im '+this.name);
// }
// Person.prototype.saAge=function() {
//     console.log('im '+this.age+" old");
// }

// var p1 = new Person('Nag', 32);
// var p2 = new Person('Ria',2);

// es6

// var p1 = new Person();  // error , use before declaration

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {
//         console.log('im ' + this.name);
//     }
//     sayAge() {
//         console.log('im ' + this.age + " old");
//     }

//     static getSomething() {
//         console.log('Person static method...');
//     }
// }

// Person.staVar = 12;


// var p1 = new Person('Nag', 32);
// var p2 = new Person('Ria', 2);


// var P = Person;
// var p1 = new P('person1',1);

// Person.getSomething();
// console.log(Person.staVar);

//-----------------------------------------------------


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person:constructor()');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

class Employee extends Person {

    constructor(name, age, salary) {
        super(name, age); // u must write..
        this.salary = salary;
        console.log('Employee:constructor()');
    }
    sayName() {
        super.sayName();
        console.log('dude im '+this.name);
    }

}

var emp = new Employee('Emp1', 32, 1000);