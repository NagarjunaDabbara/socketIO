const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const http = require('http')
const port = process.env.PORT || 3000

const app1 = http.createServer(app)

app.use(express.static(__dirname + '/public'))

const io = socketIO(app1.listen(port, () => {
    console.log(`server started at 3000`)
}))

io.on('connection', function (clientSocket) {
    console.log('A connection is made bt me and the client' + clientSocket.id)

    clientSocket.on('disconnect', function () {
        console.log('Client disconnected')
    })

    clientSocket.emit('emiCheyali', {
        name: 'Nagarjuna',
        age: 22
    })
    clientSocket.on('sleep', function (s, callback) {
        console.log(s)
        callback()
    })

    clientSocket.on('dhaham', function (s, callback) {
        console.log(s)
        callback(JSON.stringify(s)  + 'dfiljghdfjkl')   })
    })



    // Part 1
    // First thing is to create a socket
    // we created a server using http and express object
    // we started the server
    // we kept this working server behind the socjetIO
    // We have given a name to this socket - as io

    // part2
    // Make a connection
    // In return as a response, server has to send the Client required libraries to create a socket at the client place
    // Client created a client side socket
    // Client needs to make first request

    // Part3
    // Information exchange btw client and  the srver


    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

