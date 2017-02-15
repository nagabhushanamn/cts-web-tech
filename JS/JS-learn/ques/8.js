

// what is __proto__?


// var p1 = { name: 'Nag' };


// // var p2 = {
// //     __proto__:p1
// // }

// // var p2 = Object.create(p1);

// var p2 = {};
// Object.setPrototypeOf(p2,p1);


//-------------------------------------------


// what is differenece in creating object by new keyword and by Object.create

function Person() {
    //...
}
var p = new Person();
var q = new Person();


// var o = Object.create(p);

// var o = {
//     __proto__:p
// };


// es6

Object.setPrototypeOf(q,p);


