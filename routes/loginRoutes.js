//imports
const express = require('express');
const passport = require('passport');

//instanitating router
const router = express.Router();

// gets and displays a login page
router.get('/', (req, res) => {
    res.render('login', { title: 'Login form' })
});

// // logging out 
// router.get('/', (req, res) => {
//     req.logOut();
//     res.redirect('/login')
// });

// checks username and password using passport
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/dashboard');
});

//exporting the router
module.exports = router;