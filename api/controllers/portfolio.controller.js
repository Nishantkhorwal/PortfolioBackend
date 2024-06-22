import Portfolio from "../models/portfolio.model.js";

const controller = async (req,res)=>{
    const {name, email, subject, message} = req.body;

    try{
        const newMessage = new Portfolio({name,email,subject,message});

        await newMessage.save();
        res.status(201).json({ success : true, message : "Message Saved Successfully"});
    }catch{
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default controller;