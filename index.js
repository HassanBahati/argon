//importing the express library/framework
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();

//instantiating express in constant app
const app = express();

//route imports
const dash = require('./routes/dashRoute');
const employee = require('./routes/employeeRoute');
const orders = require('./routes/ordersRoute');
const register = require('./routes/registerRoutes');
const login = require('./routes/loginRoutes');

//reg model
const Registration = require('./models/usersModel')


//require expre session 
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

//db connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .once('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

 
  
//middleware
app.use(bodyParser.json());
app.use(expressSession);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

//configurations- setting pug as templete engine
app.set('view engine', 'pug');
app.set('views', './views');

// middleware for serving static files(css,js,images)
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

//routes
app.use('/dashboard', dash);
app.use('/register', register);
app.use('/login', login);
app.use('/employee', employee);
app.use('/orders', orders);

//path parameters -used to specify the exact route

//incase a route doesnt exist
app.get('*', (req, res) => {
  res.send('the route specified doesnt exist');
});

//server to run at port 3000
app.listen(3000, () => console.log('Server started on port 3000'));

