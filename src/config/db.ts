//it is the database configuration
//mongo atlas is the hosted solution
import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
      //async function to pause the execution of the function until the promise being awaited resolves or rejects
      //creating a function arrow function
      //we will keep this in try catch block to handle the errors

      try {
            //connect is the method in which we will give the url of the database/connection string
            mongoose.connection.on("connected", () => {
                  //when db will connect this event wil trigger and it will be call backed
                  console.log("connected to database successfully"); //this will be the initial error
            });

            //for future errors
            mongoose.connection.on("error", (err) => {
                  console.log("Error in connecting to database", err);
            });

            await mongoose.connect(config.databaseUrl as string); //typecast as string  await is to stp the connection
      } catch (err) {
            console.error("Failed to connect to database ", err);
            process.exit(1); //to stop the server
      }
};

export default connectDB;

//**EXTRA*/*/
// // src/config/db.ts
// import mongoose from "mongoose";
// import { config } from "./config";

// const connectDB = async () => {
//       try {
//             // Connect to MongoDB using the connection string from the config

//             // Event listener for successful connection
//             mongoose.connection.on("connected", () => {
//                   console.log("Connected to database successfully");
//             });

//             // Event listener for connection errors
//             mongoose.connection.on("error", (err) => {
//                   console.error("Error in connecting to database", err);
//             });
//             await mongoose.connect(config.databaseUrl as string, {});
//       } catch (err) {
//             console.error("Failed to connect to database", err);
//             process.exit(1); // Exit process with failure
//       }
// };

// export default connectDB;
