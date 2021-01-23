const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const  nunjucks = require('nunjucks')

const PORT = 8080

nunjucks.configure('views', {
	autoescape:  true,
	express:  app,
	watch: true,
})

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('template.html', {
		name: "world" // renders ./pages/Home.html with props {name: "world"}
	});
})

io.on('connection', (socket) => {
	console.log('a user connected')
})

http.listen(PORT, () => {
	console.log('listening on *:' + PORT)
})