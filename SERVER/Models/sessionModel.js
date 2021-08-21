
import  mongoose  from "mongoose";

const SessionSchema = new mongoose.Schema({
    title: {type:String,required:[true,"the title is required"]},
    description:String,
    user: {type:mongoose.Schema.ObjectId, ref:"User"},
    mentor: {type:mongoose.Schema.ObjectId, ref:"User"},
    timeToStart:String,
    timeToEnd:String,

   

    status:{
        type:String,
        enum:["appending","approve","decline"],
        default:"appending"

    }
});

SessionSchema.pre(/^find/, function(next){
    this.populate({
        path:"user",
        select:"firtName lastName email phone gender"
    }).populate({
        path:"mentor",
        select:"firstName lastName email phone gender"
    });
    next();
})
const SessionInfo = mongoose.model('Session',SessionSchema);

export default SessionInfo;