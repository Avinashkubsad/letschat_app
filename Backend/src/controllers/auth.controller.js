import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {

    if(!fullName  || !email || !password){
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be atleast 6 characters" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashpassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      const responseData = {
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
    };

     console.log("Response Data (to client):", responseData);
      return res.status(201).json(responseData);
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const login = async(req, res) => {
  const {email,password} = req.body
  try{
   const user = await User.findOne({email})
   if(!user){
    console.log("Invalid credentials")
    return res.status(400).json({message:"Invalid Credentials"});
   } 

   const isPasswordCorrect = await bcrypt.compare(password,user.password);

   if(!isPasswordCorrect){
    console.log("Invalid credentials")
    return res.status(400).json({message:"Invalid Credentials"});
   }

   generateToken(user._id,res);

   res.status(200).json({
    _id:user._id,
    fullName:user.fullName,
    email:user.email,
    profilePic:user.profilePic
   })
  }catch(error){
    console.log("Error in login logic",error.message);
    res.status(500).json({message:"Internal server error"});
    
  }
};

export const logout = (req, res) => {
  try{
    res.cookie("jwt","",{maxAge:0})   // 0 means it will logout immediately
    res.status(200).json({message:"Logged out Successfully"});
  }catch(error){
      console.log("Error in logout logic",error.message);
    res.status(500).json({message:"Internal server error"})

  }
};


export const updateProfile = async (req,res)=>{
  try{
     const {profilePic} = req.body;
      const userId = req.user._id;


      if(!profilePic){
      returnres.status(400).json({message: "Profilepic is required"})  
      }

      const uploadResponse = await cloudinary.uploader.upload(profilePic)
      const updatedUser = await User.findByIdAndUpdate(userId,{profilePic: uploadResponse.secure_url},{new :true});
  }catch{

  }

}
