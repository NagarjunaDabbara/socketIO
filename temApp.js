const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const http = require('http')
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

       //app
const server = http.createServer(app)

const serverSocket = socketIO(server.listen(port, () =>{
    console.log(`server started on ${port}`)
}))

serverSocket.on('connection', (clientSocket) => {
    console.log(`Client with id ${clientSocket.id} is trying to connect to the server`)

    serverSocket.emit('joining' , {key : 'some idiot joined the chat.close.close.close.'})
    clientSocket.on('studentInfo', (collectIncomingData, callback) => {
         serverSocket.emit('received', collectIncomingData)
         callback()
    
        // clientSocket.emit('received', collectIncomingData)
    
    })

    // serverSocket.emit('name',{
    //   //  name: jQuery('[name=message]').val()
    // })

})