const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add contact name"]
    },
    email:{
        type:String,
        required:[true,"Please add email"]
    },
    phone:{
        type:String,
        required:[true,"Please add phone number "]
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("Contact",contactSchema)