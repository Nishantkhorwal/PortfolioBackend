import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    }
}, 
   {
    timestamps : true
   }
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;

