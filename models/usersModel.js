//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const usersSchema = new mongoose.Schema({ 
    userEmail: {
        type: String,
        required: 'Please Enter first name'
    },
    userName: {
        type: String,
        required: 'Please Enter last name'
    },
    userPassword: {
        type: String,
        required: 'Please Enter last name'
    },
    confirmPassword: {
        type: String,
        required: 'Please Enter last name'
    },
})

//

//export the mongoose model
module.exports = mongoose.model('Users', usersSchema);
