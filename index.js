const express = require("express");

const app = require("./src/app");
const mongoose = require("mongoose");
const Subscriber = require("./src/models/subscriber");

 // middleware to parse json bodies and url-encoded bodies
app.use(express.json()); // parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // parsing URL-encoded bodies

async function connectToDatabase() {
     try {
          await mongoose.connect("mongodb+srv://vasusoni630:vasu1234@cluster0.au7mouj.mongodb.net/?retryWrites=true&w=majority", {
               useNewUrlParser: true,
               useUnifiedTopology: true,
          });

          console.log("Connected to database");
     } catch (error) {
          console.error("Database connection error:", error);
     }
}

connectToDatabase();

// Start the server
const port = 3000;
app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
});
