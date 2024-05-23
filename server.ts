import app from "./src/app";  //import app to the server
import {config} from "./src/config/config";
// to set up server make function and make port variable which we will get from process

const startServer = () => {
    //const port = process.env.PORT || 3000 ;// variable in the node server process ,if portis not pass then it will run on 3000 server
    //env is the  object provided by node.js that containtheuswr encirnment.italllows you to acess the environment variable.
     const port = config.port ||3000;




    app.listen(port,() => {//this is the call back when the server will start  
        console.log(`Listening on port: ${port}`);

});



};
startServer();//call the method

// we have made appin expressin app.ts the on server we have imported it
// and we have ren the server at the port
// -> in json dev-nodemon server .ts  we are running srver fileso it is the the entry point
// -> whrn it will rumour server will start in express


