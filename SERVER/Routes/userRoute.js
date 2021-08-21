import express from "express";
import UserController from "../Controllers/userController.js";
import Validator from "../middleware/Validator.js"
import Datachecker from "../middleware/Datachecker.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyAccess from "../middleware/verifyAccess.js";

const userRouter = express.Router();



userRouter.post("/signup",
Validator.newAccountRules(),
Validator.validateInput,
Datachecker.validateEmailDuplication,
Datachecker.checkAge,
UserController.signupUser);




userRouter.get("/all",UserController.getAllUsers);
userRouter.get("/:id",Validator.checkId(),Validator.validateInput, UserController.getOneUser);
userRouter.patch("/:id" ,Validator.checkId(),Validator.validateInput, UserController.updateOneUser);
userRouter.delete("/:id" ,Validator.checkId(),Validator.validateInput,UserController.deleteOneUser);

userRouter.post("/signin",UserController.signinUser);
userRouter.patch("/:id/role",verifyToken,verifyAccess("admin"),UserController.updateOneUserRole);
userRouter.get("/all/mentors",verifyToken,verifyAccess("user"),UserController.getAllMentors);


export default userRouter;