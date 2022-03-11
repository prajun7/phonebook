const express = require("express");
const router = express.Router();

const { logInUser} = require ("../controller/logInController");

// middlewares
// const { auth, access } = require("../../middlewares/common/ErrorHandler");

//Register route
//This will go to, auth/login 
router.post("/login", logInUser);

module.exports = router;