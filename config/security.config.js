const passport = require('passport');

exports.securenav = (req, res, next)=>{
    if(req.isAuthenticated()){
        next();
    } else {
        res.status(400).redirect('./auth/signin/form');
    }

};