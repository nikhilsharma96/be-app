import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import express from 'express';

dotenv.config({
    path: './env'
})

const app = express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo db connection failed", err);
})