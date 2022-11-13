const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
  origin: "https://valeriaerceg.glitch.me",
  methods: ['GET']
})
);

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
