//GEH

import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

//types of the func
const globalErrorHandler = (
      err: HttpError,
      req: Request,
      res: Response,
      next: NextFunction
) => {
      const statusCode = err.statusCode || 500; // status code is not getting then 500 will printed
      return res.status(statusCode).json({
            //we have to send the res response to the client IN  status method

            message: err.message, //to get the msg
            //errorStack: err.stack, //we have to make this stack only in dev time not in  production ,to do this make changes in the config
            errorStack: config.env == "development" ? err.stack : "", //we will send empty stack not the original stack
            //if its dev then send the stack oe send the empTy stack
      });
};

export default globalErrorHandler;
