//imports
const express = require('express');
const multer = require('multer');
const Employee = require('../models/employeeModel');
//instantiating router from express
const router = express.Router();

///get employee
router.get('/createEmployee', (req, res) => {
  res.render('createEmployee', { title: 'Employee' });
});

//employee list
router.get('/', async (req, res) => {
    //protected route needs login
  if (req.session.user) {
    try {
      //find all data in database
      const employeeDetails = await Employee.find();
      res.render('humanResource', {
        users: employeeDetails,
        title: 'HumanResource',
      });
    } catch (err) {
      res.send('Failed to retireve Employee Details ');
    }
  } else {
    res.redirect('/login');
  }
});

//image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

//creating new employee
router.post(
  '/createEmployee',
  upload.single('imageupload'),
  async (req, res) => {
    try {
      console.log(req.body);
      const employee = new Employee(req.body);

      employee.imageupload = req.file.path;
      //await code performing db operation
      await employee.save();

      res.redirect('/employee');
    } catch (err) {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    }
  }
);
//updating employee
router.get('/update/:id', async (req, res) => {
  try {
    const updateEmp = await Employee.findOne({ _id: req.params.id });
    res.render('updateEmployee', { user: updateEmp });
  } catch (err) {
    res.status(400).send('Unable to find item in the database');
  }
});

// route to save the updated data
router.post('/update', async (req, res) => {
  try {
    await Employee.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect('/employee');
  } catch (err) {
    console.log(err);
    res.status(404).send('Unable to update item in the database');
  }
});

//delete and employee record from the database
// add the delete code to the employeelist pug file
router.post('/delete', async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.body.id });
    res.redirect('back');
  } catch (err) {
    res.status(400).send('Unable to delete item in the database');
  }
});

//exports
module.exports = router;
