import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsersforSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find(
      { _id: { $ne: loggedInUserId } }.select("~password")
    );
    res.status(200).json(filteredUsers);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};


//get messages btw two users
export const getMessages = async (req, res) => {
  try {
    const { id: usertochatid } = req.params;
    const myId = req.user._id;

    // messages between senderId and usertochatid // messages btw im the sender / im the receiver
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: usertochatid },
        { senderId: usertochatid, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getMessges controller ");
    res.status(500).json({ err: "Internal server Error" });
  }
};

//here while sending message   it can be anything like message /profile picture
export const sendMessage =  async (req,res) =>{
  try{
   const {text , image}= req.body;
   const { id:receiverId} =req.params;     //settting  id as receiverid
   const senderId = req.user._id;   //me

   let imageUrl;
   if(image){
    //upload the image to cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image);
    imageUrl = uploadResponse.secure_url;
   }
   
  }catch{

  }
}