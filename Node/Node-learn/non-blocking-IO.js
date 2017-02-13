var fs = require('fs');

// // non-blocking IO
// fs.readFile('data.txt', function (err, content) {
//     console.log(content.toString('utf8'));
// });

// console.log('Do something else..');


//------------------------------------------

// var data1 = fs.readFileSync('data-1.txt');
// console.log(data1);

// var data2 = fs.readFileSync('data-2.txt');
// console.log(data2);

//------------------------------------------

var callback = function (err, contents) {
    console.log(contents.toString('utf8'));
}


console.log('reading file-1');
fs.readFile('data-1.txt', callback);

console.log('reading file-2');
fs.readFile('data-2.txt', callback);
