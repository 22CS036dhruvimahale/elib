// ROUTER IS USED TO SEND THE REQUEST
import express from "express";
import { createUser, loginUser } from "./userController";

const userRouter = express.Router(); //method call

//routes

//create post request

//for executing this part we have made the controller file
// userRouter.post("/register", (req, res) => {
//       //here second parameter is the request handler,here the endpoint will bw concatenate by the register
//     res.json({ message: "User registered" });
// });
// after createing we can write it as

userRouter.post("/register", createUser); //we will pass the parameter directly

userRouter.post("/login", loginUser);

export default userRouter;
