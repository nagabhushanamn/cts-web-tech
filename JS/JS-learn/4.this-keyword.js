

/*

    this ==> owner of execution-context

    imp-note : functions will read context-data
               ..if any variables used without reference



    by default , all global-context variables are properties of global-obj


    imp-notes :

    if object don't have property ==> undefined
    if context-chain dont have variable ==> reference-error

*/

// why we need 'this' keyword?
// "to read owner of execution-context object's data
 
// var name = "GLOBAL";
 
// var person = {
//     personName: 'Nag', // obj's property
//     sayName: function () {
//         //console.log('im '+personName); // reads context's data
//         //console.log('im '+person.personName); // reads person's data
//         console.log('im '+this.personName);
//     }
// };

// // person.sayName();

// var p = person;
// person = { personName: 'Ria' }; // re-assign new-obj to person-variable

// p.sayName();

//-----------------------------------------------------------------


// var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// var p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };


// better-code

// function sayNameForAll() {
//     // var name = "Abc";
//     console.log('im '+this.name);
// }

// var p1 = { name: 'Nag', sayName: sayNameForAll };
// var p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ?? // function-invocation  ( this ==> global-obj)
// p1.sayName(); // im Nag   // method-invocation    ( this ==> invoker-obj)
// p2.sayName(); // im Ria


/*
    imp-note:

    ->for every context , there must be one owner
    ->that owner ==> this


*/

//-----------------------------------------------------------------

// i need 1000+ person objs

// constructor or class

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     this.sayName = function () {
//         console.log('im '+this.name);
//     }
//     this.sayAge = function () {
//         console.log('im '+this.age +" old");
//     }
// }

// var p1 = new Person('Nag', 32); // constructor-invocation ( this ==> new-obj )
// var p2 = new Person('Ria', 2);
// //....

// imp-note : by default constructors return 'this'

//-----------------------------------------------------------------


// from third-party , greet-library
var greetUtil = {
    name:'UTIL',
    sayName: function (message,from) {
        console.log(message+ ' im '+this.name +"-"+from);
    },
     sayAge: function () {
        console.log('im '+this.age+' old');
    }
};

// our data-objects ( loaded dynamically )
var p1 = { name: 'Nag', age: 32 };
var emp1 = { name: 'CTS', age: 0 };

// greetUtil.sayName();

// imp-note : we can bind one-obj's func to other dynamically ( dynamic function-binding )

// way-1 : for individual args

// greetUtil.sayName.call(p1,"Hello","CHN");
// greetUtil.sayName.call(emp1,"Dude","KOLKATA");

// way-2 : for array of args

// greetUtil.sayName.aplly(p1,["Hello","CHN"]);
// greetUtil.sayName.apply(emp1, ["Dude", "KOLKOTA"]);

// way-3 ( lazy invocation)

// var newF = greetUtil.sayName.bind(p1, 'Hi', 'Universe');
// newF(); // on-event

// var newF2 = greetUtil.sayName.bind(emp1);
// newF2('Hello','IND');


//----------------------------------------------------------

// in .js lang , can invoke func in 4 ways


// 1.function invocation            ( this ==> global-obj )
// 2.method invocation              ( this ==> invoker-obj)
// 3.constructor invocation         ( this ==> new-obj )
// 4.call/apply/bind invocation     ( this ==> arg-obj )

//----------------------------------------------------------












