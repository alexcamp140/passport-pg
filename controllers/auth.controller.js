const passport = require("passport");
const {createUser} = require('../queries/users/users.queries.js')


exports.signinForm = (req, res, next) => {
  res.render("auth/auth-form", {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      res.render("auth/auth-form", {
        errors: [info.message],
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user,
      });
    } else {
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          res.redirect("/home");
        }
      });
    }
  })(req, res, next);
};

exports.signup = async (req, res, next) => {
    const body = req.body;
    try {
      const user = await createUser(body);
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          res.redirect("/home");
        }
      });
    } catch (error) {
      res.render("auth/signup-form", {
        errors: [error.message],
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user,
      });
    }
  };

  exports.signupForm = (req, res, next) => {
    res.render("auth/signup-form", {
      errors: null,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  };

  exports.signout = (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/auth/signin/form');
    });
  };