// var o = {
//     doWork: function () {
//         console.log('im A');
//     }
// };

//---------------------------------------

// var App = App || {};

// (function () {

//     var i = 100; // private

//     App.b.doWork();
//     App.c.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im A');
//         }
//     };

//     App.a = o; // export

// })();

//---------------------------------------

// AMD

// define('js/a', ['js/b'], function (bmod) {

//     bmod.doWork();
//     // cmod.doWork();

//     //...
//     var i = 1;
//     var o = {
//         doWork: function () {
//             console.log('im A');
//         }
//     };

//     return o;

// });

//---------------------------------------

// commonJS

console.log('a.js');

var b = require('./b');
var c = require('./c');

var i = 1;

b.doWork();
c.doWork();

var o = {
    doWork: function () {
        console.log('im A');
    }
};

module.exports = o;