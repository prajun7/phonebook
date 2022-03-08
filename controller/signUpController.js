const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Object destruction
const {registerValidation, loginValidation} = require('../validation');

const signUpUsers = async (req, res)=> {

    //Validation login before creating user
    const {error} = registerValidation(req.body);

    if(error){
        return res.status(400).send({'error' : error.details[0].message});
        //error message gets store in error.details[0].message
    }

    //Checking if the user is already in the database
    //This will make sure we have unique user
    //If the same user found than just return with 400 error
    const emailExists = await User.findOne(
        {email:req.body.email}
    );
    if (emailExists){
        return res.status(400).send({'error' : 'Email Already Exists'})
    }

    //Hash Passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    //Create a new User
    const user = new User({
        name:req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try{
        const savedUser = await user.save();
        res.send({'user_info_backend':user});
        // Better not to sending all the information,
        // It is better to send just the user id, like this:  res.send({'user_id':user._id});
        // But, for simplicity, and to store in the context API in frontend, I am seding the whole user
        // Check src/components/SignUp.js
    }catch(err){
        res.status(400).send(err);
    }
};

module.exports = {
    signUpUsers,
  };