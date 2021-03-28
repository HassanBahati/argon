//imports
const express = require('express');
const Orders = require('../models/ordersModel')
//instantiating router from express
const router = express.Router();

//list 
router.get('/', async (req, res) => { 
    try{
        //find all data in database 
        const ordersDetails = await Orders.find();
        res.render('orders', {orders:ordersDetails, title: 'Orders'});
       
    }catch(err){
        res.send('Failed to retireve Orders Details ')
    }
});


///get createorder
router.get('/createOrders', (req, res) => { 
    res.render('createOrders', {title: 'Order'});
});


router.post('/createOrders', async (req, res) => {
    try{
        console.log(req.body);
        const order = new Orders(req.body);
      
    
        //await code performing db operation 
        await order.save();
        
        res.redirect('/orders');
    } catch(err){

        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
    
})


//exports
module.exports = router;

