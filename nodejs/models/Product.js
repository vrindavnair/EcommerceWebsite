const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true,
             },
        desc:{
            type:String,
            required:true,
            unique:true,
        },
        img:{
            type:String,
            required:true
        },
        categories:{
            type:Array,
            required:true
        },
        color:{
            type:String,    
        },
        size:{
            type:String,
              },
        price:{
            type:Number,
            required:true
        },
 
},
    {timestamps:true}

)
module.exports=mongoose.model("Producct",ProductSchema)