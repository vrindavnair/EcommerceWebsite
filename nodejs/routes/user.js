const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin} =require('./verifyToken')


//update

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
       req.body.password = await bcrypt.hash(req.body.password, parseInt(process.env.PASS_SEC));
    }
 
    try {
       const updatedUser = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body
       }, { new: true });
 
       res.status(200).json(updatedUser);
    } catch (err) {
       res.status(500).json(err);
    }
 });

 //Delete
 router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (err) {

        res.status(500).json(err)
    }
 })

  //getuser
  router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
       const user= await User.findById(req.params.id)
       const { password, ...userData } = user.toObject();
       res.status(200).json(userData);
       
    } catch (err) {

        res.status(500).json(err)
    }
 })

 //get all users

 router.get("/",verifyTokenAndAdmin,async(req,res)=>{
   try {
      const users= await User.find()
    
      res.status(200).json(users);
       
   } catch (err) {

       res.status(500).json(err)
   }
})

//get user stat

router.get("/stats", verifyTokenAndAdmin, async(req,res)=>{
   const date=new Date()
   const lastyear=new Date(date.setFullYear(date.getFullYear() - 1))
   try {
      const data= await User.aggregate([
         {$match:{createdAt:{$gte: lastyear}}},
         {
            $project:{
               month:{$month:"$createdAt"},
            },
         },
         {
            $group:{
               _id:"$month",
               total:{$sum:1},
            }
         }
      ])
 res.status(200).json(data)
      
   } catch (error) {
      res.status(500).json(error)
      
   }
})

module.exports = router;


 




