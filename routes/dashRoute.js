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

//finance
router.get('/finance', (req, res) => {
    res.render('finance')
});

//trucks
router.get('/trucks', (req, res) => {
    res.render('trucks')
})

//orders
router.get('/orders', (req, res) => {
    res.render('orders')
})

//exporting router 
module.exports = router;
