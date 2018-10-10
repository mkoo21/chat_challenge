const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(1337);
console.log('server listening on port 1337');

const wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', (req) => {
  const connection = req.accept(null, req.origin);
  const loop = () => {
    setTimeout(
      () => {
        connection.sendUTF('foo');
        loop();
      },
      Math.random() * 5000
    );
  };

  loop();
});
