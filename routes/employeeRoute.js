//imports
const express = require('express');
const multer = require('multer');
const Employee = require('../models/employeeModel')
//instantiating router from express
const router = express.Router();

///get employee
router.get('/createEmployee', (req, res) => { 
    res.render('createEmployee', {title: 'Employee'});
});

//list 
router.get('/', async (req, res) => { 
    try{
        //find all data in database 
        const employeeDetails = await Employee.find();
        res.render('humanResource', {users:employeeDetails, title: 'HumanResource'});
       
    }catch(err){
        res.send('Failed to retireve Employee Details ')
    }
});


//image upload 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage})

// router.post('/createEmployee', upload.single('imageupload'), (req,res) => {
//     try {
//         console.log(req.file)
//     }
//     catch(err) {
//         res.send(400);
//     }
// })

router.post('/createEmployee', upload.single('imageupload'), async (req, res) => {
    try{
        console.log(req.body);
        const employee = new Employee(req.body);
      
    employee.imageupload = req.file.path;
        //await code performing db operation 
        await employee.save()
        
        res.redirect('/employee')
    } catch(err){

        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
    
})


//exports
module.exports = router;
