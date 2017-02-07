// create new symbol
// var symbol = Symbol('cts');

// get symbol if already exist or create new-one
// var symbol = Symbol.for('cts');


//-------------------------------------

// why/where we use Symbol


// var person = {
//     name: 'Nag',
//     [Symbol.for('cts')]: 'cts'
// };
// var emp = {
//     name: 'Emp',
//     [Symbol.for('cts')]: 'cts'
// };
// var tnr = {
//     name: 'Nag',
//     [Symbol.for('cts')]: 'cts'
// }

//----------------------------------

// if (person[Symbol.for('cts')]) {
//     console.log('this is my cts domain object');
// }

//-----------------------------------------


// class Person{
//     //..
// }
// Person.prototype[Symbol.toStringTag] = "Person";


// var person = new Person();
// console.log(person.toString());

//-----------------------------------------


// var arr1 = [1, 2, 3];
// arr1[Symbol.isConcatSpreadable] = false;

// var arr2 = [0];

// var newArray=arr2.concat(arr1);


//------------------------------------------