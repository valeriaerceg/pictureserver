const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;



app.listen(port, function () {
  console.log('Server is running on PORT',port);
});


app.use(express.static('/public/*'));


app.use('/public', express.static('public'));
app.use(express.static('javascript'));
// app.use(express.static('public'));
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');

const router = require('./Router');
const home = require('./home');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/upload', router);
app.use('/home', home);


// const container = document.querySelector('.images');
