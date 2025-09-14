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


export const getMessages = async (req,res) => {
    try{
        const {id:usertochatid} =req.params;
        const senderId = req.user._id;

       // messages between senderId and usertochatid // messages btw im the sender / im the receiver
        const messages = await Message

    }catch(error){

    }

}
