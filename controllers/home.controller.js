exports.home =(req,res,next) =>{
    console.log("is authenticated : ");
    console.log(req.isAuthenticated());
    console.log("req.user : ");
    console.log(req.user);
    res.render('home/home', {
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user
      });
}