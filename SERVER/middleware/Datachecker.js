import UserInfo from "../Models/userModel.js";

class Datachecker {

    static validateEmailDuplication = async(req,res,next) => {

        const email = await UserInfo.findOne({email:req.body.email});

        if (!email) {
            return next();

        }
        return res.status(404).json({
            status: 404,
            message: "Email already exit"
        })
    }

    static checkAge = (req,res,next) =>{
        if (req.body.age < 18){
            return res.status(404).json({
                statu: 404,
                message: "you are under age"
            })


        }
        return next();
    }
}
export default Datachecker;