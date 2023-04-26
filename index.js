const http = require("http"); // require http
const app = require("./app/app");
// require(ment) declaration
require("dotenv").config(); // read from our .env file
require('./app/app')

// create listen server
http.createServer(app).listen(process.env.PORT || process.env.host, ()=> {
    console.log(`Server here. I am fully operational and listening on port: ${process.env.port}`)
});