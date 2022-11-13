// var express = require('express');
// var app = express();
// // const port = process.env.PORT || 3000;
// app.use(express.static('public'));

// app.use(express.static(__dirname + '/public'));
// const http = require("http");

// const host = 'localhost';
// const port = 3000;

// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "application/json");
//     switch (req.url) {
//         case "/public":
//             res.writeHead(200);
//             res.end(/public/images);
//         default:
//             res.writeHead(404);
//             res.end(JSON.stringify({error:"Resource not found"}));
//     }
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });

// const images = JSON.stringify([
//     {
//         "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/3aaefd03-6423-4324-903f-687b30cd7234.png" 
//     },
//     {
//         "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/3c668713-9c11-4238-833d-1f4834d017d2.png"
//     },
//     {
//         "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/3e14fc34-2d68-4aea-a815-40e078a42ef3.png"
//     }
// ]);

