import express from "express";
import UserController from "../Controllers/userController.js";
import Validator from "../middleware/Validator.js"
import Datachecker from "../middleware/Datachecker.js";

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


export default userRouter;