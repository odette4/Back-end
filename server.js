import express from "express";
const app = express();

app.listen(3030, ()=>{
    console.log('server is running on port 3030');

})

export default app;