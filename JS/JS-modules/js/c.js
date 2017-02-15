// var o = {
//     doWork: function () {
//         console.log('im A');
//     }
// };

//---------------------------------------


// var App = App || {};

// (function () {
//     var i = 100; // private
//     var o = {
//         doWork: function () {
//             console.log('im C');
//         }
//     };
//     App.c = o;
// })();


//---------------------------------------

// AMD

// define('js/c', [], function () {

//     //...
//     var i = 2;
//     var o = {
//         doWork: function () {
//             console.log('im C');
//         }
//     };

//     return o;

// });

//---------------------------------------

// commonJS

console.log('c.js');

var i = 1;
var o = {
    doWork: function () {
        console.log('im C');
    }
};

module.exports = o;