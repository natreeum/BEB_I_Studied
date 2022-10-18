const express = require('express');
const app = express();
const port = 4999;
const cors = require('cors');

// const router = express.Router();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.get('/lower', (req, res) => {
  res.send(JSON.stringify('hello'));
});

app.post('/lower', (req, res) => {
  //do something
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString().toLowerCase();
    res.send(JSON.stringify(body));
  });
});

app.post('/upper', (req, res) => {
  //do something
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString().toUpperCase();
    res.send(JSON.stringify(body));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
