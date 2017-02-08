// var o = {
//     doWork: function () {
//         console.log('im B');
//     }
// };

//---------------------------------------

// var App = App || {};

// (function () {
//     var i = 100; // private
//     var o = {
//         doWork: function () {
//             console.log('im B');
//         }
//     };
//     App.b = o;
// })();


//---------------------------------------

// AMD

// define('js/b', [], function () {

//     //...
//     var i = 2;
//     var o = {
//         doWork: function () {
//             console.log('im B');
//         }
//     };

//     return o;

// });

//---------------------------------------

// commonJS

console.log('b.js');

var i = 1;
var o = {
    doWork: function () {
        console.log('im B');
    }
};

module.exports = o;