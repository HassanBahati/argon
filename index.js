//importing the express library/framework
const express = require('express');
//const bodyParser = require('body-parser');

//instantiating express in constant app
const app = express();

//middleware
app.use(express.urlencoded({extended: true}));
//configurations- setting pug as templete engine 
app.set('view engine', 'pug');
app.set('views', './views');

//middleware for serving static files(csss, js , images)
app.use(express.static('public'));

//createEmployee route
app.get('/createEmployee', (req, res) => { 
    // res.send('Homepage! Hello World.');
    //res.sendFile(__dirname + '/index.html')
    res.render('createEmployee', {title: 'Employee'});
});

//orders route
app.get('/createOrders', (req, res) => {
    res.render('createOrders', {title: 'create Order'})
})

//post route
app.post('/createEmployeee', (req, res) => {
    console.log(req.body);
});

//path parameters -used to specify the exact route

//incase a route doesnt exist
app.get('*', (req, res) => {
    res.send('the route specified doesnt exist')
})

//query parameters



//server to run at port 3000
app.listen(3000, () => console.log('Server started on port 3000'));





/**
 * what is crud
 * what are http methods
 */





/**
 * when user visits browser at http://localhost:3804/ 
 * --browser conducts a READ operation by sending a GET request to the server 
 * --server receives a GET request and handles itt using the express get() method
 * --this express get() method  has 2 arguments , app.get(path/endpoint, callback function)
 * --the first arugement which is the path/end point appears after the domain name for this case its '/'
 * -- then the second argument is a call back function whith 2 arguments (req,res), 
 * --it use   s the res object to send a response back to the browser , it does this by send() method res.send()
 * For Callbacks --we are usign ES^ arrow functions instead of the older way of writing functions  
 */

/**
 * app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
that is under middleware

 */