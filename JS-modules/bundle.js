(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// console.log('app.js');

// var App = App || {};

// // a.js
// o.doWork(); // im A

//------------------------------


// App.a.doWork();
// App.b.doWork();
// App.c.doWork();


//------------------------------

// AMD

// require(['js/a'], function (amod) { 
//     amod.doWork();
// });


//------------------------------

// commonJS

console.log('app.js');

var a = require('./js');
a.doWork();



},{"./js":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{"./b":2,"./c":3}]},{},[1]);
