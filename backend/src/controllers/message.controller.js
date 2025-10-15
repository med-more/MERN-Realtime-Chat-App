import User from "../models/user.model.js";
import Message from "../models/message.model";

export const getUsersForSideBar = async(req, res) =>{
    try {
        const loggedInUserId = req.user._id; 
        const filtredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(200).json(filtredUsers);
    } catch (error) {
        console.log("Error in getUsersForSideBar", error.message);
        res.status(500).json({message: "internal server error"});
    }
};


export const getMessages = async(req, res) =>{
    try {
        const {id: userToChatId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                {senderId: myId, receiverId:userToChatId},
                {senderId: userToChatId, receiverId:myId},
            ],
        });

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages controller", error);
        res.status(500).json({message: "internal server error"});
    }
};