import mongoose from "mongoose"; //WHAT WILL BE THE STRUCTURE THAT WE DEFINE IN THE SCHEMA
import { User } from "./userTypes";
const userSchema = new mongoose.Schema<User>( //  <> within this there is generic
      {
            //we will pass an object within this
            name: {
                  type: String,
                  required: true,
            },
            email: {
                  type: String,
                  unique: true,
                  required: true,
            },
            password: {
                  type: String,
                  required: true,
            },
      },

      { timestamps: true } //SECOND PARAMETER , record is crete in  db there will be  two extra fields created AT and updated AT (sort the data in asc dec ,know the records)
);
//creating a method here

//users   <user> is the type info so we can get the autocompletion
export default mongoose.model<User>("User", userSchema); //mongoose will create the collection with user name in plural form
//we can  also add third parameter to overwrite the user name
