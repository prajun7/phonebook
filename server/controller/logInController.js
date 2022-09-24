const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

// Getting the validation logic
// Object destruction
const { loginValidation } = require('../validation');

const logInUser = async (req, res) => {
        //Validation logic before login
        const {error} = loginValidation(req.body);

        if (error){
            return res.status(400).send({'error' : error.details[0].message});
        }
    
        //Checking if the email exists
        const user = await User.findOne(
            {email : req.body.email}
        );
        if (!user){
            return res.status(400).send({'error' : "Email is not found"});
        }
    
        //Checking if password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass){
            return res.status(400).send({'error' : "Invalid Password"});
        }
    
        //Creating and assigning a token(JWT)
        const token = jwt.sign({_id : user._id}, config.TOKEN_SECRET.login);
    
        res.header('authToken',token).send({'authToken' : token, 'user' : user});
        // Sending the authToken as well as all the user information 
        // Storing the user info in user and using ContextAPI in frontend to store those user info
       
       // res.send("Logged in"); //Not correct, must be in json object
}

module.exports ={
    logInUser
};