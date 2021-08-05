import UserInfo from "../Models/userModel.js";

class UserController{

    static signupUser = async(req,res)=>{
        const user = await UserInfo.create(req.body);

        if(!user){
            return res.status(400).json({
                status:400,
                message: "user was failed to register"
            })
        }
      return res.status(200).json({
       status:200,
       message:"user as successed to register",
       data:user 
      })  
    }

    static getAllUsers = async(req,res) =>{
        const users = await UserInfo.find();

        if(!users){
            return res.status(404).json({
                status:404,
                message:"users not found"
            })
        }
        return res.status(200).json({
            status:200,
            message:" users found",
            data:users
        })

    }
    static getOneUser = async(req,res) =>{
        const user = await UserInfo.findById(req.params.id);

        if(!user) {
            return res.status(404).json({
                status: 404,
                message: "user not found"
            })
        }
        return res.status(200).json({
            status:200,
            message:"Success",
            data: user
        })
    }
    static updateOneUser = async(req,res) =>{
        const user = await UserInfo.findByIdAndUpdate(req.params.id,req.body);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message:"user not found"
            })
        }
        const updateUser = await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"Success",
            data:updateUser
        })
    }
static deleteOneUser = async (req, res) => {
    const user = await UserInfo.findByIdAndDelete(req.params.id);
    if(!user) {
        return res.status(404).json({
            status: 404,
            message: "user not found"
        })
    }
    return res.status(200).json({
        status:200,
        message:"success deleted",
        data: user
    })
}

}

export default UserController;