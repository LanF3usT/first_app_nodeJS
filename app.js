var http = require('http'),
		fs 	 = require('fs')
		
var app = http.createServer(function (req, res) {
	fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) {
		res.writeHeader(200, {"Content-Type": "text/html"})
  	res.end(data)
	})
}).listen(8080)

var io = require('socket.io')
var io = io.listen(app)

var donnees = fs.readFileSync("data.json", 'utf8')

io.sockets.on('connection', function (socket) {
  socket.emit('send_data', donnees)

	socket.on('push_data', function (data) {
		fs.writeFile("data.json", data, 'utf-8', function() {
			donnees = fs.readFileSync("data.json", 'utf8')
		})
	})
})