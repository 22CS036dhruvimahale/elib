// ROUTER IS USED TO SEND THE REQUEST
import path = require('path');
import express from "express";
import { createBook } from "./bookController";
import multer from "multer";

const bookRouter = express.Router(); //method call


const upload =multer({
    dest: path.resolve(__dirname, '../../public/data/uploads'),
    //multer has created the files itself
    limits:{fileSize:3e7}
})

//api books
bookRouter.post(
    "/",
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "file", maxCount: 1 },
    ]),
    createBook
  ); //we will pass the parameter directly
//()=>{} this is the custom middle ware
     




export default bookRouter;
