import express, { NextFunction, Request, Response } from "express";
///import createHttpError, { HttpError } from "http-errors";
// import { config } from "./config/config";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";

//make instance of app
const app = express(); //call what we have imported
//we are not running server here this is just the setup of express

app.use(express.json()); //this is the middleware for json

//ROUTE -THIS ARE THE ENDPOINTS (URLS) which we call from the client

app.get("/", (req, res, next) => {
      // '/' is the router and within bracket is the request handler

      //   const error = createHttpError(400, "Something went wrong");
      //   throw error;

      res.json({ message: "welcome to elib api" }); //is sends response to the client
}); // in bracket we write the segment of the url if nothing is types then home route is considered
//get is the http methods get,post,put,patch,app is the object

app.use("/api/users", userRouter);

app.use('/api/books',bookRouter)
//we have shifted the error handler to new file and exported from there and we will import here
app.use(globalErrorHandler);

export default app; //can run this for testing

//GLOBAL ERROR HANDLER//
// it is middleware it should be at last
// use is used to register our middle ware,it is a function in the javascript
//in request handler there are 3 request in error there are 4
