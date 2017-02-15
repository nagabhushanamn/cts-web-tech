/*

     data-types

     1. simple/primitive ==> vaues
     2. complex/reference ==> objects


     A. primitives-types

     1. string
     2. number
     3. boolean
     4. null
     5. undefined
     6. symbol ( from es6 )

     B. reference-types

     ==> objects

     imp-note : even functions also objects

*/


// A. Primitives

//--------------------------------------------

// 1. string
var name = "Nag";
var selection = 'a';

//---------------------------------------------

// 2. number
var count = 12;
var cost = 12.12;

//---------------------------------------------

// 3. boolean

var found = true;

// imp-note :

// falsy-values ==> false,0,"",null,undefined,NAN



// ref : https://dorey.github.io/JavaScript-Equality-Table/

//---------------------------------------------

// 4. undefined

var v;

//---------------------------------------------

// 5. null

var person = null;

//---------------------------------------------


// references  ==> objects

/*

    .js-lang is not 'class' based lang till es-5 version.

    how to create objects in .js lang ?

    syntax

    var ref=new ConstructorFunction();

    how to identify constructor-func ?

    if any func having pascal-case naming convetions

    e.g

       A___B___();

       e.g

       Object
       Array
       Person

*/

//-------------------------------------------------------------------

// var person = new Object(); // creates obj-wrapper

// // imp-note : all js-objs are extensible & configurable by default , i.e we can add/delete propeties on fly

// person.name = "Nag";
// person.age = 32;
// person.doWork = function () {
//     console.log('im working...');
// }

// delete person.age;

//-------------------------------------------------------------------


// litral-style objects

// 1. Object

// var config = new Object(); // obj-wrapper
// config.url = 'http://blabla.com';
// config.method = 'GET'
// config.success = function () { }
// config.failure = function () { }

// or litral-style

var config = {
    url: '',
    method: '',
    success: function () { },
    failure: function () { }
};


//-------------------------------------------------------------------

// 2. Array


var arr = new Array();
arr.push('item-1');
arr.push('item-2');


// or literal-style

var arr = ['item-1', 'item-2'];

//-------------------------------------------------------------------

// 3. RegExp

var ssn = new RegExp('\\d{3}-\\d{2}-\\d{4}');

// or literal-style

var ssn = /\d{3}-\d{2}-\d{4}/;


//-------------------------------------------------------------------

// 4. Function

// imp-note : all functions .js-lang are objects

// var add = new Function('n1','n2','var result=n1+n2;return result;');

/*
    --> hard to understand,refcator,debug
*/

// or literal

// function add(n1, n2) {
//     var result = n1 + n2;
//     return result;
// }

// add.prop1 = 12;
// add.method = function () {
//     //...
// }

//-------------------------------------------------------------------

// how to access obj's propeties

var person = {
    name: 'nag',
    'full-name':'Naga N'
};

person.name = "Nagabhushanam";  // write
person['name'] = "Nagabhushanam";

person['full-name'] = '...'; // write

console.log(person.name); // read
console.log(person['name']); // read

console.log(person['full-name']); // read

//-------------------------------------------------------------------