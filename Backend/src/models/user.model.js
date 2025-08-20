import mongoose from "mongoose"

const UserSchema = new moongoose.Schema(
    {
        email:{
            type: String,
            required:true,
            unique:true,
        },
        fullname:{
            type: String,
            required: true,
        },
        
    }
)