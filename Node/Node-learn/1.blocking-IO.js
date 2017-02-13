var fs = require('fs');

// blocking IO
var content = fs.readFileSync('data.txt'); //...............
console.log(content.toString('utf8'));
console.log('Do Something else');