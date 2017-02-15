// const numCPUs = require('os').cpus().length;
// console.log(numCPUs);

// const cluster = require('cluster');
const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//     console.log(`Master ${process.pid} is running`);
//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }
// } else {

// Workers can share any TCP connection
// In this case it is an HTTP server
http.createServer((req, res) => {
    // heavy computation
    var i = 0;
    while (i < 10000) {
        console.log(i);
        i++
    }
    res.writeHead(200);
    res.end(`hello world from ${process.pid}\n`);
}).listen(8080);

console.log(`Worker ${process.pid} started`);

// }