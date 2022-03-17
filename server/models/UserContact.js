const mongoose = require('mongoose');

// We are referencing a document in another document
// Since User's friend is a ever growing list, se we are creating a new Collection
// We will put the user_is from User.js for showing the relation

const userContactSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"    //It is representing to the user's model, it must be same name that is user
    },
    name:{
        type: String,
        required: true
    },
    profession:{
        type: String,
        required: true
    },
    finance:{
        type: String
    },
    mobile:{
        type: String
    },
    linkedin:{
        type:String
    },
    canHelpMeAt:{
        type:String
    },
    facebook:{
        type: String
    },
    location:{
        type: String
    },
    institution:{
        type: String
    },
    canConnectWithMe:{
        type: String
    },
    politics:{
        type: String
    },
    influence:{
        type: String
    },
    domainExpert:{
        type: String
    },
    business:{
        type: String
    },
    skillset:{
        type: [String]
    },
    dateOfBirth:{
        type: String
    },
    network:{
        type: Number
    },
    bloodGroup:{
        type: String
    },
    industry:{
        type: String
    }

});

module.exports = mongoose.model("UserContact",userContactSchema);


/*

For POST req, to add Contact

{
	"user_id" : "6227d4141319418e56b55644",
	"name" : "Samrat",
    "profession": "Teacher",
    "finance": "Good",
    "mobile": "205-999-9999",
    "linkedin": "samrat_linkedin",
    "canHelpMeAt": "Yes he is helpful",
    "facebook": "Samrat",
    "location": "Birmingham",
    "institution": "SNS",
    "canConnectWithMe": "Yes he can",
    "politics": "No politics",
    "influence": "Yes he is",
    "domainExpert": "Nutritionist",
    "business": "Gym",
    "skillset": ["Gym","Coding"],
    "dateOfBirth": "April 1",
    "network": "5",
    "bloodGroup": "Positive",
    "industry": "School"
}



*/