const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(1337);
console.log('server listening on port 1337');
const users = ['Alice', 'Bob'];

const wsServer = new WebSocketServer({
  httpServer: server
});

wsServer.on('request', (req) => {
  const connection = req.accept(null, req.origin);
  const loop = () => {
    setTimeout(
      () => {
        const payload = {
          user: users[Math.round(Math.random())],
          msg: Math.random().toString(36).substr(2, 5),
        };
        connection.sendUTF(JSON.stringify(payload));
        loop();
      },
      Math.random() * 5000
    );
  };

  loop();
});
