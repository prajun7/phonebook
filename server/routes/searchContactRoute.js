const UserContact = require('../models/UserContact');

const express = require("express");
const router = express.Router();

const { searchUser } = require ("../controller/searchContactController");

// middlewares
// const { auth, access } = require("../../middlewares/common/ErrorHandler");


//Register route
//This will go to, search/ 
router.post("/", searchUser );

module.exports = router;