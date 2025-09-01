import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";

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
    if (user) return res.status(400).json({ message: "Email already exists" });

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
   if(!User){
    return res.status(400).json({message:"Invalid Credentials"});
   } 

   const isPasswordCorrect = await bcrypt.compare(password,user.password);

   if(!isPasswordCorrect){
    return res.status(400).json({message:"Invalid Credentials"});
   }

   generateToken(user._id,res);

   res.status(200).json({
    _id:user._id,
    fullName:user.fullName,
    email:user.email,
    profilePic:user.profilePic
   })
  }catch{
    
  }
};
export const logink = (req, res) => {
  try{
   console.log("logic for login")
  }catch{
    
  }
};
export const loginlk = (req, res) => {
  try{
   console.log("logic for login")
  }catch{
    
  }
};


export const logout = (req, res) => {
  res.send("signup router");
};
