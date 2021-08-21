import TokenAuth from "../helpers/TokenAuth.js";


 const verifyToken = async (req,res,next) =>{
    const token = req.header("x-auth-token");
    if(!token){
        return res.status(404).json({
            message: "no token provided"
        })
    }

    try{
        const user = TokenAuth.getDataFromToken(token);
         req.user = user;
         return next();

    }catch(err){
        console.log(err);
    }
}

export default verifyToken;