import mongoose, { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    username : {
        type: String, 
        required: true,
        unique: true,
    },
    email : {
        type: String, 
        required: true,
        unique: true,
    },
    password : {
        type: String, 
        required: true,
    },    
}, {timestamps: true});


const user = mongoose.model('User',userSchema);

export default User;