/*


.js-lang ,
 
 all functions are objects by default

 wen can create function-on in 2 ways

 1. function declaration

     ==> always get hoisted with function-obj.
     ==> function-obj created at context-creation phase

     when to use ?

     to have function in context always

 2. function expression

     ==> will not get hoisted with function-obj. we can invoke only after expression

      when to use ?

      to create function-obj based on params or condition  

*/

//-----------------------------------------

// 1. function declaration ( Named function )


// console.log(add(12,12));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,12));

//-----------------------------------------

// 2. function expression ( Anonymous function)

// console.log(add(12,12));  // can't invoke undefined as func

// var add = function (n1,n2) {
//     return n1 + n2;
// }

// console.log(add(12,12));

//----------------------------------------


// function doSomething(input) {

//     var func;

//     if (input === "inp1") {
//         func = function () {
//             //...
//             console.log('inp1');
//         }
//     }
//     if (input === "inp2") {
//         func = function () {
//             //...
//             console.log('inp2');
//         }
//     }

//     func();

// }

// doSomething('inp1');


//--------------------------------------------


// function doSomething(input) {

//     // var func;

//     if (input === "inp1") {
//         function func() {
//             console.log('inp1');   
//         }
//     }
//     if (input === "inp2") {
//          function func() {
//             console.log('inp2');
//         }
//     }

//     func();

// }

// doSomething('inp2');

//--------------------------------------------

// imp0note : .js-lang no-block scopes till es-5

// function func() {

//     {
//         var i = 100;
//     }

//     console.log(i);

// }

// func();

//--------------------------------------------


// function as values

// function sayHello() {
//     console.log('Hello');
// }

// var sayHi = sayHello;
// sayHi();

//--------------------------------------------

// function as params

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('Hello');
// }

// greet();
// greet(function () { console.log('Ola'); });

// e.g



// var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// nums.sort(function (a, b) { return a - b; });
// console.log(nums);

//--------------------------------------------

// function as return of other func


// function teach() {
//     console.log('teaching...');
//     var learn = function () { 
//         console.log('learning..');
//     };
//     return learn;
// }

// var learnFunc = teach();
// learnFunc();
// learnFunc();

//--------------------------------------------


// function params-demo

/*
    imp-note : to function we can pass 0 or many args
*/

// function reflect(a) {
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12,13,14,15,16));

// e.g


// function sum() {
//     var len = arguments.length,
//         i = 0,
//         result = 0;

//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }
//     return result;
// }

// console.log(sum(1,2,3,4,5));

//--------------------------------------------------


// Quiz

// var a = 10;

// function f1(a) {
//     console.log(a);
// }
// f1();


//--------------------------------------------------
