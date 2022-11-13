const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
  origin: "https://valeriaerceg.glitch.me",
  methods: ['GET']
})
)
// app.put("/images", (req, res) => {
//   res.json({'upload/images/':+ req.params.path
//   })
// })

app.listen(port, function () {
  console.log('Server is running on PORT',port);
});
// app.use((req, res, next) => {

//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(express.static('public'));
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');

const router = require('./Router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/upload', router);
// app.use(cors());
