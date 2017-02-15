/*

    A closure is a function having access to the parent scope,
    even after the parent function has closed.


    why/when we need closure?

    --> to abstract public-behav of any module
    --> while executing functions async, to access parent-scoped data.

*/


function Person(name, age) {
    this.name = name;
    this.age = age;

    var self = this;
    //event , emitted by global-obj

    setInterval(function () {
        self.age++;
        console.log(self.name + "==>" + p.age);
    }, 1000);

}

var p = new Person('Ria', 0);

// setInterval(function () {
//     p.age++;
//     console.log(p.name + "==>" + p.age);
// }, 1000);