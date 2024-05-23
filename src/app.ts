import express from 'express'
//make instance of app
const app = express();//call what we have imported
//we are not running server here this is just the setup of express


//ROUTE -THIS ARE THE ENDPOINTS (URLS) which we call frpom the client

app.get('/',(req,res,next)=>{

    res.json({message:"welcome to rest api"});//is sends response to the clinet

});// in bracket we write thes egment of theurl if nothing is types then home route is considered
//get is the http methods get,post,put,patch,app is the object


export default app;//can run this for testing
