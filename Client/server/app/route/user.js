const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const mongoose = require("mongoose");
var multer = require('multer');
const User = require("../model/User");
const userController = require("../controller/userController");
const bcrypt = require("bcryptjs");

const DIR = './uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

router.post("/register",upload.array('files', 10), async (req, res, next) => {
     try {
 const reqFiles = []
  const url = req.protocol + '://' + req.get('host')
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + '/uploads/' + req.files[i].filename)
  }
   let users_with_same_email = await User.find({ email: req.body.email })
        if (users_with_same_email.length >= 1) {
        return res.status(409).json({
        message: "email already in use"
        });
        }

    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phonenumber:req.body.phonenumber,
      birthdate:req.body.birthdate,
      country:req.body.country,
      Role:req.body.Role,
      Price:req.body.Price,
      files:reqFiles
    });
    let data = await user.save();
    const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });

  }
});


router.post("/login", userController.loginUser);
router.get("/me", auth,userController.getUserDetails);

router.route('/AddAdmin').patch(async(req, res) => {
  try{


     const updated= await User.findOneAndUpdate({email:req.body.email},{ $set: { Role: 'Admin' }});

      if (updated==null) {
         res.json(updated)


      }
      else
      {
        res.json(updated);
        console.log('Guide successfully updated!')
        console.log(req.body)
      }

  }
  catch(err){

      res.json({message:err});
    }
});

router.route('/FindUser').post(async(req, res) => {
    User.find(req.body,(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

router.route('/ShowAdmin').get(async(req, res) => {
    User.find({Role:'Admin'},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

router.route('/ShowSuperAdmin').get(async(req, res) => {
    User.find({Role:'SuperAdmin'},(error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
router.route('/UpdateAdmin/:id').patch(async(req, res) => {

    try{
    const updated= await User.updateOne({_id:req.params.id},{$set: req.body});
      res.json(updated);
      console.log('Place successfully updated!')
      console.log(req.body)
    }catch(err){
      res.json({message:err});
    }
    });



router.route('/Users').get(async(req, res)=>{
    User.find({Role:'Client'},(error, data)=> {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
  })

//Show User with Guide Roles
router.route('/UserGuides').get(async(req, res)=>{
    User.find({Role:'Guide'},(error, data)=> {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
  })

router.route('/UserGuides2').post(async(req, res)=>{
    User.find(req.body,(error, data)=> {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
  })

//Delete Guide
router.route('/delete-Guide/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

//UpdateUserPassword
router.route('/UpdateUserPass/:id').patch((req, res)=>{

     User.findById({_id:req.params.id}, function(err, doc) {
      if (err) {
        res.json("Error")
        return false;
      }
      else{
    doc.password = req.body.password;
    doc.save();
    res.json("Congrat");
    }
  });

    });

//Update Account
router.route('/UpadteAccount/:id').patch(async(req, res)=>{

      try{
    const updated= await User.updateOne({_id:req.params.id},{$set: req.body});

      res.json(updated);
      console.log('Place successfully updated!')
      console.log(req.body)
    }catch(err){
      res.json({message:err});
    }
    });



router.route('/Search').post(async(req, res)=>{
    User.find({name:req.body.name,Role:'Client'},(err, data)=>{
        if(err){
        res.render('error', { errorMsg: "Error blah blah" } )
    } else {
        if (data.length === 0) {
            console.log("User doesn't exist");
            res.json(data)
        } else {
            res.json(data)
        }
    }
})
  })

module.exports = router;
