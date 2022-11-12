const router= require('express').Router();
const{home}= require('../controllers/home.controller.js');
const auth = require('./auth/auth.routes.js');
const {
  securenav
} = require("../config/security.config.js");


router.use('/home', home);
router.use('/auth', auth );
router.get("/securenav", securenav, (req, res)=>{
  res.render('nav/secure-nav',{
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
});


router.use("/", (req, res) => {

    res.redirect("/home");
  });

module.exports = router;