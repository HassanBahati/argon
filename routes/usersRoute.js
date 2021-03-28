//importing express
const express = require('express');

//instanting router 
const router = express.Router();

//importing route
const Users = require('../models/usersModel');

//login
router.get('/login', (req, res) => {
    res.render('login')
});

//signup
router.get('/register', (req, res) => {
    res.render('register')
})

//create user 
router.post('/register', async (req, res) => {
    try{
        console.log(req.body);
        const user = new Users(req.body);

        //await code performing db operation 
        await user.save()
        
        res.redirect('/dashboard')
    } catch(err){

        console.log(err.message);
        res.send('Sorry something went wrong');
    }
    
})


//exporting router 
module.exports = router;
