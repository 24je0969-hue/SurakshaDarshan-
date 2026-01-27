// import dotenv from "dotenv";

// import express from "express";
// import mongoose from 'mongoose';
// import { DB_NAME } from './constant.js';
// import connectDB from './db/index.js';
// import {app} from "./app.js";
// dotenv.config({path:'./.env'})

// connectDB()

// .then(()=>{
    
//     app.listen(process.env.PORT, ()=>{
//         console.log(`Server is running at port ${process.env.PORT}`);
//     })
// })
// .catch((err)=>{
//     console.log("MONGO db connection failed !! ", err);
// })

import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import { DB_NAME } from './constant.js';
import connectDB from './db/index.js';
import {app} from "./app.js";

// Load .env only in development
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({path:'./.env'})
}

connectDB()
.then(()=>{
    // Use environment PORT or fallback to 8000
    const PORT = process.env.PORT || 8000;
    
    app.listen(PORT, '0.0.0.0', ()=>{
        console.log(`Server is running at port ${PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !! ", err);
})