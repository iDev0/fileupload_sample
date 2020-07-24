var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '파일업로드 샘플' });
});

router.post('/fileUpload', function(req, res, next) {
  const uploadPath = 'D:\\test.jpg'
  const reqFile = req.files.file;
  reqFile.mv(uploadPath, (err) => {
    console.log(err)
  })
  // res.send('fileUploaded!')
  res.redirect('/')
});

module.exports = router;
