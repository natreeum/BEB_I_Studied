const http = require('http');

const PORT = 4999;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }
  if (request.method === 'POST' && request.url === '/upper') {
    let body = [];
    request
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString().toUpperCase();
        response.writeHead(200, defaultCorsHeader);
        response.end(JSON.stringify(body));
      });
  } else if (request.method === 'POST' && request.url === '/lower') {
    let body = [];
    request
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString().toLowerCase();
        response.writeHead(200, defaultCorsHeader);
        response.end(JSON.stringify(body));
      });
  } else {
    response.end('error');
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10,
};
