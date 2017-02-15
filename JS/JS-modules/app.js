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


