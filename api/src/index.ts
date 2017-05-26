import { Server } from 'hapi';

const server = new Server();
server.connection({ port: 4201, host: 'localhost' });

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
