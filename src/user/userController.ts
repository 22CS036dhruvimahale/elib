import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import userModel from "./userModel";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
      // async / await is to simplify the syntax necessary to consume promise-based APIs
      const { name, email, password } = req.body; //get the fields from  the postman where we have entered this data on the request filed on body named property(req.body.name)

      //1-validation
      if (!name || !email || !password) {
            //if client do not enters the filed then we will return them

            const error = createHttpError(400, "All fields are required"); //400 is the status code which will pop up there 400 is for client error because they have given incomplete info

            //return res.json({message:"All fields are required"});//instead of this will will crate an error and then pass the error in return
            return next(error); //this will send from the global error handler
      }

      //DATABASE

      try {
            const user = await userModel.findOne({ email: email }); //which record we want to search,if value of object  and key is same then we can write it as  ({email})
            //it will return a document or null,if doc means user is already present

            if (user) {
                  const error = createHttpError(
                        400,
                        "user already exists with this email"
                  );
                  return next(error);
            }
      } catch (err) {
            return next(createHttpError(500, "error while getting user")); //500 server error
      }

      //to store user
      //->password-hash(we need to hash password using library bcrypt)

      const hashedPassword = await bcrypt.hash(password, 10); //by hovering we can see that it returns promise ,means we can use await here it is an asynchronous method
      //10 is the salt round number to reduce concurrent hashes bigger the no. more security
      //this is an authentication system

      let newUser: User;

      try {
            newUser = await userModel.create({
                  name,

                  email,

                  password: hashedPassword,
            });
      } catch (err) {
            return next(createHttpError(500, "error while getting user"));
      }

      //generating tokens JWT
      try {
            const token = sign(
                  { sub: newUser._id },
                  config.jwtSecret as string,
                  {
                        expiresIn: "7d",
                        algorithm: "HS256",
                  }
            ); //first obj is  payload ,sub is sub property users id 2nd para meter is secrete which we keep in config
            //sign is not a promise fun means it is synchrony so no need to add await

            // res.json({ message: "User Created" });//we will return the mongos id
            //   res.json({ id : newUser.id});
            res.json({ accessToken: token });
      } catch (err) {
            return next(
                  createHttpError(500, "error while signing the jwt token")
            );
      }
};

export { createUser }; //if we will not export then anyone cant access
