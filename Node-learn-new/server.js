/**
 * New node file
 */

var http=require('http');

var server=http.createServer();

server.on('request', function(req,resp) {
	resp.writeHead(200, {'Content-Type':'Welcome to Node-world'});
});

server.listen(3000, function() {
	console.log('server at http://localhost:3000');
});

