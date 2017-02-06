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




