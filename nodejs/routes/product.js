const  Product= require("../models/Product");

const router = require("express").Router();
const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin} =require('./verifyToken')


//create

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //update

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  
    try {
       const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
         {
          $set: req.body
       },
        { new: true });
 
       res.status(200).json(updatedProduct);
    } catch (err) {
       res.status(500).json(err);
    }
 });

//  //Delete
 router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    } catch (err) {

        res.status(500).json(err)
    }
 })

//   //get product
  router.get("/find/:id",async(req,res)=>{
    try {
       const product= await Product.findById(req.params.id)
       const { password, ...userData } = user.toObject();
       res.status(200).json(product);
       
    } catch (err) {

        res.status(500).json(err)
    }
 })

//  //get all products

 router.get("/",async(req,res)=>{
   try {
      const product= await Product.find()
    
      res.status(200).json(product);
      
   } catch (err) {

       res.status(500).json(err)
   }
})



module.exports = router;


 




