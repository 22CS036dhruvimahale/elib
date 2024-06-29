// ROUTER IS USED TO SEND THE REQUEST
import express from "express";
import { createBook } from "./bookController";

const bookRouter = express.Router(); //method call




//api books
bookRouter.post("/", createBook); //we will pass the parameter directly

export default bookRouter;
