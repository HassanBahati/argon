//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const ordersSchema = new mongoose.Schema({ 
    firstname: {
        type: String,
        
    },
    lastname: {
        type: String,
        
    },
    location: {
        type: String,
    
    },
    phone: {
        type: Number,
     
    },
    nationalId: {
        type: String,
      
    },
    time: {
        type: String,
        
    },
    numberOfTrucks: {
        type: String,
    
    },
    typeOfWastes: {
        type: String,
    
    },
    serviceRequired: {
        type: String,
        
    },
    typeOfRequest: {
        type: String,
      
    },
    
})

//

//export the mongoose model
module.exports = mongoose.model('Orders', ordersSchema);
