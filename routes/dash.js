//importing express
const express = require('express');

//instanting router 
const router = express.Router();


//dashboard
router.get('/', (req, res) => {
    res.render('dash')
});

//humanresource
router.get('/humanResource', (req, res) => {
    res.render('humanResource')
})

//exporting router 
module.exports = router;
