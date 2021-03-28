//importing the express library/framework
const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//instantiating express in constant app
const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .once('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//configurations- setting pug as templete engine
app.set('view engine', 'pug');
app.set('views', './views');

//middleware for serving static files(csss, js , images)
app.use(express.static('public'));

//route imports
const dash = require('./routes/dashRoute');
const users = require('./routes/usersRoute');
const employee = require('./routes/employeeRoute');
const orders = require('./routes/ordersRoute');

//routes
app.use('/dashboard', dash);
app.use('/users', users);
app.use('/employee', employee);
app.use('/orders', orders);

//path parameters -used to specify the exact route

//incase a route doesnt exist
app.get('*', (req, res) => {
  res.send('the route specified doesnt exist');
});

//server to run at port 3000
app.listen(3000, () => console.log('Server started on port 3000'));

