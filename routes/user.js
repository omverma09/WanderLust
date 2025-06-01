const express = require("express");
const router = express.Router(); // Route object aayega.
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");


router.route("/signup")
  .get( userController.renderSugnupForm)
  .post( wrapAsync(userController.signup))


// For Login.  
router.route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: '/login', 
        failureFlash: true 
    }),
    userController.login
   )
  

// for Log-out users.
router.get("/logout", userController.logout);

module.exports = router;