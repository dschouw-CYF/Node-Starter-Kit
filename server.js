// Import/require express and invoke express and store it in a variable called app
const express = require('express');
const app = express();
const port = process.env.PORT || 5000
// Add some routes to respond to requests
// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", function (request, response) {
    response.send("Hello World!");
  });

app.get("/chocolate", (request,response) => response.send("chocolate, yay!"));
app.get("/myname", (request,response) => response.send("My name is Denver"));
// end the routes

// start the server
app.listen(port, () => console.log("The server has started!"));