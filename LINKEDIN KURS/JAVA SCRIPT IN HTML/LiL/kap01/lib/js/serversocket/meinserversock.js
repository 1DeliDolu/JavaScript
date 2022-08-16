const http = require('http');
const WebSocketServer = require('websocket').server;
var server = http.createServer(function (request, response) {
});
server.listen(1337, function () { });
wsServer = new WebSocketServer({
  httpServer: server
});
wsServer.on('request', function (request) {
  var connection = request.accept(null, request.origin);
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      if (message.utf8Data == "Login") {
        connection.sendUTF("Verbindung etabliert");
      } else {
        connection.sendUTF(new Date().toDateString() + ": " + message.utf8Data);
      }
    }
  });
  connection.on('close', function (connection) {
  });
});
