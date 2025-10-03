//const express = require("express");  //require("express") loads the Express module (a framework for building web applications with Node.js).

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";


dotenv.config();
const app = express(); //  Calling express() creates an Express application instance.
//This app object is what you’ll use to define routes (like app.get("/"...)),
// middleware, and configuration.



const PORT = process.env.PORT;
console.log(" app running on port",PORT)

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}));


app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);


app.listen(PORT, () => {
  connectDB();
});
