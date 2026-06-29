const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

const Project=mongoose.model("Project",{

name:String,
description:String

});

app.get("/projects",async(req,res)=>{

const projects=await Project.find();

res.json(projects);

});

app.listen(5000,()=>{

console.log("Server Running");

});
