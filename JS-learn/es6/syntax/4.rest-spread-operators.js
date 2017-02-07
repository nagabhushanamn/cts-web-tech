// rest

// function func(a, ...rest) {
//     console.log(a);
//     //console.dir(arguments);
//     console.dir(rest);
// }

// func(1, 2, 3, 4);


// spread  ==> spread any iterable-objs as individual elemets

// var max = Math.max(1, 2, 3, 4, 5);
// console.log(max);

var nums = [1, 2, 30, 4, 5, 6, 7, 8, 9];
// var max = Math.max(nums);
// var max = Math.max(nums[0],nums[1],nums[2]); // manual spreading
var max = Math.max(...nums); // spread
console.log(max);

var a = [1, 2, 3];
var b = [7, 8, 9, 10]

var c = [...a, 4, 5, 6, ...b,..."NAG"];
