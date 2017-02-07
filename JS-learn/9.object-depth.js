"use strict"

// var person = {
//     name: 'Nag',
//     age: 32
// };
// // imp-note : by default all .js-objs configurable

// // Object.defineProperty(person, 'name', { configurable: false,writable:false,enumerable:false });
// Object.defineProperty(person, 'address', {
//     value: 'CHN',
//     configurable: false,
//     writable: false,
//     enumerable: false
// });

// // Object.defineProperties()

// // Object.defineProperty(person, 'name', {configurable:true});
// // delete person.name;

// // person.name = "Nil";


// // console.log(person.name);

// for (var p in person) {
//     console.log(p);
// }

//----------------------------------------------------

/*

    --> js objs are extensible,configurable,modifiable


*/

// var person = {
//     name: 'Nag',
//     age: 32
// };
// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);  // immutable obj

// person.newProp = "value";
// delete person.name;
// person.name = "Nil";

//----------------------------------------------------

// obj - properties

/*

    types of properties

    1. data property
    2. accessor property

*/


// var person = {
//     _name: 'Nag',
//     _age: 32,
//     set name(newName) {
//         console.log('set name');
//         if (newName) {
//             this._name = newName;
//         }
//     },
//     get name() {
//         console.log('get name');
//         return this._name;
//     }

// };

// person.name = "New Nag" // set
// console.log(person.name); // get
