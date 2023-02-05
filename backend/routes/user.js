const router = require('express').Router();
const mongoose = require('mongoose')
const User = require('../models/User');
const upload = require('../upload');
const fs = require('fs')


// upload image
router.post('/upload/:id',upload.single('image'), async(req,res)=>{
    const objectId = mongoose.Types.ObjectId(req.params.id) 
    console.log(req.file);
    const image = {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png"
    }
    const user = await User.findByIdAndUpdate(objectId,{image:image})
    res.status(200).json(user);
 })

 // get all users
router.get('/',async(req,res)=>{
    const user = await User.find({"role":"user"});
    const count = await User.count({"role":"user"});
    res.status(200).json({count, user});
})

// get a user
router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const user = await User.findById({_id : id});
    res.status(200).json(user);
})

// update user
router.put('/:id',async (req,res)=>{
    console.log(req.body);
    console.log(req.params.id);
    try {
        const user = await User.findOneAndUpdate({_id : req.params.id},req.body,{
            new:true
        })
        if(user){
            res.status(200).json("User updated Successfully");
        }else{
            res.status(401).json("No user found with this id!!!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// get salary of a user
router.get('/salary/:id',async (req,res)=>{
    try {
        const user = await User.findById({_id : req.params.id});
        if(user){
            res.status(200).json(user.salary);
        }else{
            res.status(401).json("No user found with this id!!!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// add task 
router.put('/updatetask/:id',async (req,res)=>{
    console.log(req.body);
    try {
        const user = await User.findById({_id : req.params.id});
        if(user){
            User.updateOne(
                { _id: req.params.id},
                { $push: { taskCompleted : req.body } },
                function(err, result) {
                  if (err) {
                    res.status(401).send(err);
                  } else {
                    res.status(200).send({message : "Task added Successfully!!!"});
                  }
                }
              );
        }else{
            res.status(401).json("No user found with this id!!!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// register user
router.post('/register',async(req,res)=>{
    console.log(req.body);
    try {
        const user = await User.create(req.body);
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

// login
router.post('/login',async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(email,password);
        const user = await User.findOne({ oEmail:email});
        !user && res.status(401).json("wrong password or username");

        // if(user.password != password){
        //     res.status(401).json("wrong password or username")
        // }

        if(user.role!=req.body.role)
        {
            res.status(401).json("Not a valid user!!!");
        }
        const userDetails = {
            id : user._id,
            email: user.email,
            name: user.name,
            role: user.role,
            empId:user.empId,
        }
        res.status(200).json(userDetails)
    } catch (err) {
        // res.status(401).json(err);
    }
})

// find users with pending or approved leaves
router.get('/get/user',async(req,res)=>{
    try {
        const result = await User.find({
         $or: [{ pendingLeaves: {$gte:1} }, { approvedLeaves: {$gte:1} }, ] 
        });
        res.status(200).json(result)
    } catch (error) {
        res.status(401).json(error);
    }
})

module.exports = router;
