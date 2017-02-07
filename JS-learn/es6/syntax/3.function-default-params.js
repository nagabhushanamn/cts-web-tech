// es5

// function func(a, b) {

//     // if (!a) { a = 0 };
//     // if (!b) { b = 1 };

//     // a = a || 0;
//     // b = b || 1;

//     console.log(a);
//     console.log(b);
// }


// func(undefined, 20);



//-------------------------------

// es6

function func(a = 0, b = 1) {
    console.log(a);
    console.log(b);
}


func(undefined, 20);