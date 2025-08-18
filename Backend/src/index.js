//const express = require("express");  //require("express") loads the Express module (a framework for building web applications with Node.js).

import express from "express";

import authRoutes from "./routes/auth.route.js";

const app = express(); //  Calling express() creates an Express application instance.
//This app object is what you’ll use to define routes (like app.get("/"...)),
// middleware, and configuration.

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
  console.log("app is runing on port 5001");
});
