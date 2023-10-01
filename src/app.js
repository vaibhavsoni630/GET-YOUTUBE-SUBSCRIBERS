const express = require("express"); // Import the Express framework
const path = require("path"); // Import the path module
const { ObjectId } = require("mongodb");
//SCHEMA
const schema = require("./models/subscriber"); // Import the subscriber model
const { error } = require("console"); // Import the 'error' object

const app = express(); // Create an Express application

//PARSE INCOMING JSON DATA
app.use(express.json()); // Middleware to parse incoming JSON data
app.use(express.urlencoded({ extended: false })); // Middleware to parse incoming URL-encoded data

//HOME PAGE
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/index.html")); // THIS WILL SHOW THE INDEX.HTML FILE AS A HOME PAGE WITH DETAILS ABOUT THE PROJECT
});

//THIS ROUTE SHOWS ALL THE SUBSCRIBERS LIST WITH DETAILS
app.get("/subscribers", async (req, res, next) => {
     try {
          let subscribers = await schema.find(); // Retrieve all subscribers from the schema/model
          res.status(200).json(subscribers);
     } catch (err) {
          res.status(400); // Set the response status to 400 (Bad Request)
          next(err); // Pass the error to the error handling middleware
     }
});

//THIS ROUTE PROVIDES AN ARRAY OF ALL SUBSCRIBERS WITH ONLY TWO FIELDS, THEIR NAME AND THEIR SUBSCRIBED CHANNEL.
app.get("/subscribers/names", async (req, res, next) => {
     try {
          let subscribers = await schema.find({}, { name: 1, subscribedChannel: 1, _id: 0 }); // Retrieve subscribers with only the name and subscribedChannel fields from the schema/model
          res.status(200).json(subscribers); // Send the subscribers as a JSON response with a status of 200 (OK)
     } catch (err) {
          res.status(400); // Set the response status to 400 (Bad Request)
          next(err);
     }
});

// THIS ROUTE WILL SHOW THE DETAILS OF SUBSCRIBER WITH THE GIVEN ID.

app.get("/subscribers/:id", async (req, res) => {
     const id = req.params.id;

     if (!ObjectId.isValid(id)) {
          res.status(400).json({ message: "Invalid ID" });
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

// TO HANDLE ALL THE UNWANTED ROUTE REQUESTS.
app.use((req, res) => {
     res.status(404).json({ message: "Error - Route not found" }); // Send a JSON response with a status of 404 (Not Found)
});

module.exports = app; // to export this application
