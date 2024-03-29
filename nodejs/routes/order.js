const router=require("express").Router()


const  Order= require("../models/order");


const {verifyToken,verifyTokenAndAuthorization,
     verifyTokenAndAdmin} =require('./verifyToken')


//create

router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
  
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });
// const uuid = require('uuid');

// router.post("/", verifyToken, async (req, res) => {
//     const newOrder = new Order({
//         ...req.body,
//         userId: uuid.v4(), // Generate a new unique user ID
//     });

//     try {
//         const savedOrder = await newOrder.save();
//         res.status(200).json(savedOrder);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });




// //update

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
    try {
       const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
         {
          $set: req.body
       },
        { new: true });
 
       res.status(200).json(updatedOrder);
    } catch (err) {
       res.status(500).json(err);
    }
 });

//  //Delete
 router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted")
    } catch (err) {

        res.status(500).json(err)
    }
 })

//   //get user orders
  router.get("/find/:userId",verifyTokenAndAuthorization, async(req,res)=>{
    try {
       const orders= await Order.find({userId: req.params.userId})
       
       res.status(200).json(orders);
       
    } catch (err) {

        res.status(500).json(err)
    }
 })

//  //get all 
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
    try {
        const orders=await Order.find()
        res.status(200).json(orders)

        
    } catch (error) {
        res.status(500).json(err)
        
    }
})

//get monthly income
// router.get("/income",verifyTokenAndAdmin, async(req,res)=>{
//     const date=new Date()
//     const lastMonth=new Date(date.setMonth(date.getMonth()-1))
//     const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1))

//     try {
//         const income=await Order.aggregate([
//             {$match:{createAt:{$gte:previousMonth }}},
//             {
//                 $project:{
//                 month:{$month:"$createdAt"},
//                 sales:"$amount",
//                 },
//             },
//                 {
//                     $group:{
//                         _id:"$month",
//                         total:{$sum:"$sales"}
//                     },
//                 },
//         ])
//         res.status(200).json(income)
        
//     } catch (error) {
//         res.status(500).json(error)

        
//     }

// })

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 



module.exports = router;