// destructring ==> taking iterable elements to variabes

// var salaries = [100, 200, 300];

// // //manually destructring
// // var min, avg, max;
// // min = salaries[0];
// // avg = salaries[1];
// // max = salaries[2];


// var min, avg, max;
// [min, avg, max] = salaries;

//-----------------------------------------


// var salaries = [100, 200];
// var [min, avg, max] = salaries;

//-----------------------------------------

// var salaries = [100, 200, 300];
// var [min, , max] = salaries;

//-----------------------------------------

// var salaries = [100, 200];
// var [min,avg, max=300] = salaries;

//-----------------------------------------

// var salaries = [100, 200,300];
// var [min,...rest] = salaries;

//-----------------------------------------

// var salaries = [100, 200, [300, 400]];
// var [min, avg, [actualLow, actualHigh]] = salaries

//-----------------------------------------


// var person = { name: 'Nag', age: 32 }

// // var name = person.name;
// // var age = person.age;

// // var {name, age} = person;
// // var {name: myName, age: myAge} = person;

// var myName, myAge;
// ({ name:myName, age:myAge }=person);




