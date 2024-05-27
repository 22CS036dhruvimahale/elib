import { Request, Response, NextFunction } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
      // async / await is to simplify the syntax necessary to consume promise-based APIs

      res.json({ message: "User Created" });
};

export { createUser }; //if we will not export then anyone cant access
