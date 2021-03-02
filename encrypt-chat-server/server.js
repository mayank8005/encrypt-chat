const server = require('http').createServer();
const socketIO = require('socket.io')(server, { origins: '*:*'});

// mock database
database = [];
clients = []

const encrypt = (key, message) => {
  const enMessage = message.split("").map((char, index) => key.charCodeAt(index % key.length) + char.charCodeAt(0));
  return enMessage.join(',');
}

const decrypt = (key, message) => {
  const enMessage = message.split(",").map((charCode, index) => String.fromCharCode(charCode - key.charCodeAt(index % key.length)));
  return enMessage.join('');
}

const getUnEncryptedDatabase = (key) => database.map(text => decrypt(key, text));


socketIO.on('connection', client => {

  clients = [...clients, client];

  client.on('getHistory', (data) => {
    client.emit('history', getUnEncryptedDatabase(data.key));
  });

  client.on('newMessage', (data) => {
    const message = encrypt(data.key, data.message);
    database = [...database, message];
    console.log('messages:', database);
    clients.forEach((client) => {
      client.emit('newMessageReceived');
    })
  })
});

server.listen(5000);