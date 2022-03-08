const mongoose = require('mongoose');

// We are referencing a document in another document
// Since User's friend is a ever growing list, se we are creating a new Collection
// We will put the user_is from User.js for showing the relation

const userFriendSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"    //It is representing to the user's model, it must be same name that is user
    },
    name:{
        type: String,
        required: true,
    },
    profession:{
        type: String,
        required: true
    },
    finance:{
        type: String
    },
    mobile:{
        type: String,
        required: true,
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
        type: String,
    },
    canConnectWithMe:{
        type: Boolean
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
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String
    },
    industry:{
        type: String
    }

})
