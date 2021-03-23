//importing express
const express = require('express');

//instanting router 
const router = express.Router();


//dashboard
router.get('/', (req, res) => {
    res.render('dash')
})

//exporting router 
module.exports = router;
