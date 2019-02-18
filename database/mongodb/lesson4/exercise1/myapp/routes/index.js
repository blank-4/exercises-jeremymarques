var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
  console.log(req.body);
  var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(req.body.username == "" || req.body.username.length < 2 || req.body.username.length > 25) {
    res.render('index', { errormsg: "Votre nom d'utilisateur doit comporter entre 2 et 25 caractères !" });
  } else if(req.body.firstname == "" || req.body.firstname.length < 2 || req.body.firstname.length > 25) {
    res.render('index', { errormsg: "Votre prénom doit comporter entre 2 et 25 caractères !" });
  } else if(req.body.lastname == "" || req.body.lastname.length < 2 || req.body.lastname.length > 25) {
    res.render('index', { errormsg: "Votre nom doit comporter entre 2 et 25 caractères !" });
  } else if(req.body.email == "" || mailformat.test(req.body.email) == false) {
    res.render('index', { errormsg: "Indiquez une adresse mail valide !" });
  } else if(req.body.password == "") {
    res.render('index', { errormsg: "Indiquez un mot de passe valide !" });
  } else if(req.body.passwordvalid == "") {
    res.render('index', { errormsg: "Validez votre mot de passe !" });
  } else if(req.body.password != req.body.passwordvalid) {
    res.render('index', { errormsg: "Vos mots de passe ne correspondent pas !" });
  } else {
    var newuser = {
      u_username: req.body.username,
      u_firstname: req.body.firstname,
      u_lastname: req.body.lastname,
      u_email: req.body.email,
      u_password: bcrypt.hashSync(req.body.password, 10),
      u_passwordvalid: bcrypt.hashSync(req.body.passwordvalid, 10)
    }
    console.log(newuser);
    res.render('index', { signeduser: JSON.stringify(newuser) });
  }
})

module.exports = router;