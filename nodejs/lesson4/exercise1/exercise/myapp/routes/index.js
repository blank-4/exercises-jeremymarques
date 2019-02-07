var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var name = 'CookieDate';
  var value = returnDate();
  var options = {
    expires: new Date(Date.now() + 900000),
    httpOnly: true
  };
  res.cookie(name, value, options);
  var reCookie = req.cookies['CookieDate'];
  console.log(reCookie);
  if (reCookie){
    res.send(reCookie)
  } else {
    res.send("Jamais")
  }
  /* res.render('index', { title: reCookie }); */
});

function returnDate() {
  var d = new Date();
  return d.getDate() + "/" + d.get + "/" + d.getMonth()+1 + "/" + d.getFullYear()  
}
  
module.exports = router
