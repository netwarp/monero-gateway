const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const  nunjucks = require('nunjucks')

const redis = require('redis')
const redis_client = redis.createClient()
redis_client.on("error", function(error) {
	console.error(error)
})

const monerojs = require("monero-javascript")

const PORT = 8080

nunjucks.configure('views', {
	autoescape:  true,
	express:  app,
	watch: true,
})

const subscriber = redis.createClient()
const publisher = redis.createClient()

subscriber.on("message",(channel, message) => {
    
	io.sockets.emit('tx_done', message)
})

subscriber.subscribe("tx");


app.use(express.static('public'))


app.get('/', async (req, res) => {

	await res.render('gateway.html', {
		name: "world" // renders ./pages/Home.html with props {name: "world"}
	});
})

io.on('connection', (socket) => {
	console.log('a user connected')
})

http.listen(PORT, () => {
	console.log('listening on *:' + PORT)
})