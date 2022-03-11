const express = require("express");
const router = express.Router();

const { signUpUser } = require ("../controller/signUpController");

// middlewares
// const { auth, access } = require("../../middlewares/common/ErrorHandler");


//Register route
//This will go to, auth/register 
router.post("/register", signUpUser);

module.exports = router;

