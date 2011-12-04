var http = require('http'),
		fs 	 = require('fs')
		
var app = http.createServer(function (req, res) {
	fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) {
		res.writeHeader(200, {"Content-Type": "text/html"})
  	res.end(data)
	})
}).listen(8080)