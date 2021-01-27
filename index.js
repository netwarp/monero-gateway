const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const  nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const redis = require('redis')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gateway', {useNewUrlParser: true, useUnifiedTopology: true});


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

subscriber.subscribe("tx")

app.use(bodyParser.json())
app.use(express.static('public'))

const web_router = require('./routes/web')
const api_router = require('./routes/api')

app.use('/', web_router)
app.use('/api', api_router)


io.on('connection', (socket) => {
	console.log('a user connected')
})

http.listen(PORT, () => {
	console.log('listening on *:' + PORT)
})