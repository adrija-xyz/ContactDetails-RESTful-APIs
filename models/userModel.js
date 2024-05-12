const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add Username"]
    },
    email:{
        type:String,
        required:[true,"Please add Email Address"],
        unique:[true,"Email address is already taken"]
    },
    password:{
        type:String,
        required:[true,"Please type Password"],
    }
},
{
    timestamps:true
}
)

module.exports=mongoose.model("User",userSchema)
