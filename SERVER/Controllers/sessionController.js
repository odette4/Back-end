
import SessionInfo from "../Models/sessionModel.js";

class SessionController{

    static recordSession = async(req,res)=>{
        const session = await SessionInfo.create(req.body);

        if(!session){
            return res.status(404).json({
                status:404,
                message:"failed to record session",

             
            })
        }
        return res.status(200).json({
            status:200,
            message:"successful! session recorded",
            data:session

                
        }) 

    }
    static getAllSessions = async(req,res)=>{
        const sessions = await SessionInfo.find();

        if(!sessions){
            return res.status(404).json({
                status:404,
                message:"no sessions found"
            })
        }
        return res.status(200).json({
            status:200,
            message:"sessions found",
            data:sessions
        })
    }
    static getOneSession = async(req,res) =>{
        const session = await SessionInfo.findById(req.params.id);

        if(!session){
            return res.status(404).json({
                status:404,
                message:"one session not found"
            })
        }
        return res.status(200).json({
            status:200,
            message:"only one session founded",
            data:session
        })

    }
    static updateSession = async(req,res) =>{
        const session = await SessionInfo.findByIdAndUpdate(req.params.id,req.body);

        if(!session){
            return res.status(404).json({
                status:404,
                message:"the session not found for update"
            })
        }
        const update = await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successfully session was updated",
            data:session
        })
    }

    static updateStatusDecline = async(req,res) =>{
        const data = await SessionInfo.findById(req.params.id);
        let status;
        if(data.status=="pending"){
            status="decline";
        }
        else(status="pending");

        const session = await SessionInfo.findByIdAndUpdate(req.params.id,{status:status});
        if(!session){
            return res.status(404).json({
                status:404,
                message:"no session available"
            })
        }
        const updatesession = await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"success",
            data:updatesession
        });
    }


    static updateSessionApprove = async(req,res)=>{
        const data = await SessionInfo.findById(req.params.id);
        let status;
        if(data.status=="pending"){
            status="approved";

        }
        else(status="pending");

        const session = await SessionInfo.findByIdAndUpdate(req.params.id, {status:status});
        if(!session){
            return res.status(404).json({
                status:404,
                message:"no session available"
            })
        }
    }
    static deleteSession = async(req,res) =>{
        const session = await SessionInfo.findByIdAndDelete(req.params.id);

        if(!session){
            return res.status(404).json({
                status:404,
                message:"the session to delete was not found"
            })
        }
        return res.status(200).json({
            status:200,
            message:"deleted",
            data:session
        })
    }
}

export default SessionController;