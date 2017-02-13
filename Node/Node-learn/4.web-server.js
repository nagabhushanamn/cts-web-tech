var http = require('http');
var fs = require('fs');

var server = http.createServer(); // event-emitter

server.on('request', function (req, resp) {

    console.log('request-event...');

    // request processing logic...

    //-----------------------------------------------    

    // resp.writeHeader(200, {
    //     'Cotent-Type': 'text/plain'
    // });
    // resp.write('Welcome to Node-world');
    // resp.end();

    //-----------------------------------------------

    // Non-Blocking IO

    // fs.readFile('./ppt/all-levels node.pdf', function (err, contents) {
    //     resp.writeHead(200, {
    //         'Content-Type': 'application/pdf'
    //     });
    //     resp.write(contents);
    //     resp.end();
    // });

    //-----------------------------------------------   

    // Non-Blocking IO with streams

    var readStream = fs.createReadStream('./ppt/all-levels node.pdf'); // event emiiter

    // readStream.on('data', function (chunk) {
    //     console.log(chunk.length);
    //     // console.log('readStream data-event');
    //     resp.write(chunk);
    // });
    // readStream.on('end', function () {
    //     // console.log('readStream end-event');
    //     resp.end();
    // });

    readStream.pipe(resp); // 

    //-----------------------------------------------       




});


server.listen(3000, function () {
    console.log('server listening on http://localhost:3000/');
});