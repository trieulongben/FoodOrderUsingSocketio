var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http)
var PORT = 3001
console.log("im server!")
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/client.html');
});

app.get('/sale', (req, res) => {
    res.sendFile(__dirname + '/public/sale/saler.html');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('msg', (msg) => {
        console.log(msg);
        socket.emit('msg', msg);
    });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http)
// var PORT = 4000
// console.log("im server!")
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/anhLocdz/khach.html');
// });
// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('msg', (msg) => {
//         console.log(msg);
//         socket.emit('msg', msg);
//     });
// });

// http.listen(PORT, () => {
//   console.log(`listening on *:${PORT}`);
// });