const router = require("express").Router();
const {
  signin,
  signup,
  signinForm,
  signupForm, 
  signout
} = require("../../controllers/auth.controller.js");

router.post("/signin", signin);
router.get("/signin/form", signinForm);
router.post('/signup', signup);
router.get('/signup/form', signupForm);
router.get("/signout", signout);

module.exports = router;
