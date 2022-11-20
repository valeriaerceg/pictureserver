const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const router = express.Router();
const upload = require('./uploadMiddleware');
const Resize = require('./Resize');
const fstat  = require('fs');
const res = require('express/lib/response');


router.get('/', async function (req, res) {
  res.render('index');

});

router.post('/post', upload.single('image'), async function (req, res) {
    const imagePath = path.join(__dirname, 'public/images');
    const fileUpload = new Resize(imagePath);
    const filename = await fileUpload.save(req.file.buffer, req.file.filename);
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    return res.status(200).json({ name: filename });
  });



router.get('/images', async function(req, res) {  
  res.status(201).json({
    "images": [
        {
            "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/3aaefd03-6423-4324-903f-687b30cd7234.png" 
        },
        {
            "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/3c668713-9c11-4238-833d-1f4834d017d2.png"
        },
        {
            "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/3e14fc34-2d68-4aea-a815-40e078a42ef3.png"
        },
        {
            "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/7a9e2512-1fa2-4659-a8c3-8eec9853f6c6.png"
        },
        {
            "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/b1cf568e-4ac2-446c-835b-57631dc37657.png"
        },
        {
            "image": "/Users/valeriaerceg/Desktop/valeriaercegpictureserver/public/images/fd7b90ca-a75e-45ca-a62d-8aa6dc0513d3.png"
        }
    ]
}
);
  // console.log (fstat.readdirSync('public/images'));
});

app.get('/images1', function (req, res){
  res.sendFile("/public/images/fd7b90ca-a75e-45ca-a62d-8aa6dc0513d3.png", options, function (err) {
    if (err) {
      console.log (err);
      next(err)
    } else {
      console.log('Sent:', "/public/images/fd7b90ca-a75e-45ca-a62d-8aa6dc0513d3.png");
    }
  })
});
  

// router.get('/images', function(req, res) {
//   var image = req.params['3aaefd03-6423-4324-903f-687b30cd7234.png'];
//   res.header('Content-Type', "image");
//   fs.readFile(image, 'utf-8', function(_error, data){
//     if(err){
//       res.end(404);
//     }
//     res.send(data)    
//   });
// });


// router.get('/images', async function(req, res) {  
//   res.status(201).json({success: "Hit the /photos endpoint, but nothing is here :)"});
//   console.log (fstat.readdirSync('public/images'));
// });



  
  module.exports = router;