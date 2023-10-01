const express = require("express"); // to import the express framework
const path = require("path"); //  to import the path module
const { ObjectId } = require("mongodb");
//schema
const schema = require("./models/subscriber"); //  to import the subscriber model
const { error } = require("console"); //  to import the 'error' object

const app = express(); // for create an express application

 //parse the incoming json data
app.use(express.json()); //  this is a middleware to parse incoming json data
app.use(express.urlencoded({ extended: false })); // this is a  middleware to parse incoming url-encoded data

 //the home page
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/index.html"));  // this will show the index.html file as a home page with details about the complete project and usage
});

 //this route shows all the subscribers list with their details
app.get("/subscribers", async (req, res, next) => {
     try {
          let subscribers = await schema.find();  // retrieve all the subscribers from the schema/model
          res.status(200).json(subscribers);
     } catch (err) {
          res.status(400);  // set the response status to 400 (bad request)
          next(err);  // to pass the error to the error handling middleware
     }
});

 //this route provides an array of all subscribers with only two fields, their name and their subscribed channel.
app.get("/subscribers/names", async (req, res, next) => {
     try {
          let subscribers = await schema.find({}, { name: 1, subscribedChannel: 1, _id: 0 });  // retrieve subscribers with only the name and subscribedchannel fields from the schema/model
          res.status(200).json(subscribers);  // send the subscribers as a json response with a status of 200 (ok)
     } catch (err) {
          res.status(400);  // set the response status to 400 (bad request)
          next(err);
     }
});

 // this route will show the details of subscriber with the given id.

app.get("/subscribers/:id", async (req, res) => {
     const id = req.params.id;

     if (!ObjectId.isValid(id)) {
          res.status(400).json({ message: "Invalid ID" }); // if the id in wrong 
          return;
     }

     try {
          const subscriber = await schema.findById(id);

          if (!subscriber) {
               res.status(404).json({ message: "Subscriber with ID `" + id + "` not found" });
               return;
          }

          res.send(subscriber);
     } catch (error) {
          res.status(500).json({ message: "Internal server error" });
     }
});

 // to handle all the unwanted or wrong route requests.
app.use((req, res) => {
     res.status(404).json({ message: "Error - Route not found" });  // send a json response with a status of 404 (not found)
});

module.exports = app; // to export this application
