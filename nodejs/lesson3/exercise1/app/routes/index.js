var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.json({ res: [req.query.pass, req.query.username] });
});

  router.post('/',urlencodedparser, function(req, res, next){
    res.json({ res: [req.body.pass, req.body.username] })
});

module.exports = router;
