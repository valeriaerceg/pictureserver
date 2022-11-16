const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.options('*', cors());

app.use
  cors({
  origin: 'http://127.0.0.1:3000',
  "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"
}),

app.listen(port, function () {
  console.log('Server is running on PORT',port);
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');

const router = require('./Router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/upload', router);



// methods: ['GET'],
//   headers: new Headers({
// 'Access-Control-Allow-Origin': '',
// 'Access-Control-Allow-Methods': 'GET',
// 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
// })