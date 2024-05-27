import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
      // async / await is to simplify the syntax necessary to consume promise-based APIs
      const { name, email, password } = req.body; //get the fields from  the postman where we have enterd this data on the request filed on body named property(req.body.name)

      //validation
      if (!name || !email || !password) {
            //if client do not enters the filed then we will return them

            const error = createHttpError(400, "All fields are required"); //400 is the status code which will pop up there 400 is for client error because they have given incomplete info

            //return res.json({message:"All fields are required"});//insteadof this will will craete an error and then pass the error in return
            return next(error); //this will send from the global error handler
      }

      res.json({ message: "User Created" });
};

export { createUser }; //if we will not export then anyone cant access
