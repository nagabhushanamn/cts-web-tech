function sessionStart() {
    // Trainer
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + ' teaching .js');
            var self = this;
            var learn = function () {
                console.log(this.name + " learning .js from " + self.name);
            }
            return learn;
        }
    }
    // Employee
    function Employee(name) {
        this.name = name;
        //...
    }

    var tnr1 = new Trainer('Nag'); // constructor invocation

    var emp1 = new Employee('Harsha');
    var emp2 = new Employee('Ram');

    var learnFunc = tnr1.doTeach(); // method-invocation

    learnFunc.call(emp1); // call/apply/bind invocation
    learnFunc.call(emp2);

}

sessionStart(); // function-invocation