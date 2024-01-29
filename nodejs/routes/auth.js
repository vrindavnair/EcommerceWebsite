const router=require("express").Router()
const User=require("../models/User")
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const jwt = require("jsonwebtoken");





//REGISTER
router.post("/register",async(req,res)=>{
    try{
 const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.PASS_SEC)); // Use the environment variable for salt rounds
 const newUser=new User({
        username:req.body.username,
        email:req.body.email,
         password: hashedPassword
    })
        const savedUser =await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
        res.status(500).json(err)
        
    }   
})

//Login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        
        if (!user) {
            return res.status(401).json({ message: 'Wrong credentials' });
        }

        // Compare the hashed password with the provided password
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: 'Wrong credentials' });

        }
        const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin,
        
        },process.env.JWT_SEC,
        {expiresIn:"3d"}
        )

        // Remove the password from the user object before sending it in the response
        const { password, ...userData } = user.toObject();

        res.status(200).json({...userData,accessToken});
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});





module.exports=router