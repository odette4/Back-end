import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./SERVER/Routes/userRoute.js";
import bodyParser from "body-parser";
import sessionRouter from "./SERVER/Routes/sessionRoute.js";

dotenv.config({path:'./.env'});
const app = express();

app.use(bodyParser.json());
app.use("/Backend/v1/user",userRouter);
app.use("/Backend/v1/session",sessionRouter);

app.use('/',(req,res)=>{
    res.status(404).send({
        status:404,
        message:"doesnt exist"
    })

    
})

const databaseUrl=process.env.DATABASE;
const port=process.env.PORT;

mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Database connected succesful"))


app.listen(port, ()=>{
    //console.log(databaseUrl);
    console.log(`server is running at ${port}`);

    //console.log('server is running on port 3030');

})

export default app;