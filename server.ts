import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";

// to set up server make function and make port variable which we will get from process
// Function to start the server
export const startServer = async () => {
      //connect database async and await are used together.
      await connectDB(); // Connect to the database

      //const port = process.env.PORT || 3000 ;// variable in the node server process ,if portis not pass then it will run on 3000 server
      //env is the  object provided by node.js that contain the user Environment.it allows you to access the environment variable.
      const port = config.port || 3000; // Get the port from config or use default 3000

      app.listen(port, () => {
            // Start the Express server
            //this is the call back when the server will start
            console.log(`Listening on port: ${port}`);
      });
};

// we have made app in express in app.ts the on server we have imported it
// and we have ren the server at the port
// -> in json dev-nodemon server .ts  we are running server file so it is the the entry point
// -> when it will run our server will start in express
startServer(); // Call the function to start the server
