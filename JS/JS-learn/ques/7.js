// what are pure functions??

//   any function whuch is mutating existing-state or input-params


// var user = {
//     name: 'Nag',
//     role: 'Trainer'
// };

// // impure function
// function doSomething(input) {
   
//     //input.role = "Developer";  // mutating
//     //return input;

//     var output = Object.assign({}, input, {
//         role: 'Developer'
//     });
//     return output;
// }


// var output = doSomething(user);
// console.dir(output);


//------------------------------------


// pure function

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(12, 13));



var items = []; // 
function addItem(item) {
    return [...items,item];
}


addItem('item-1');
