YouTube Channel Subscribers API

This is a simple backend project that provides a RESTful API for retrieving information about YouTube channel subscribers. The project is built using Node.js and Express, with MongoDB as the database for managing subscriber data. Subscribers' data includes fields such as their ID, names, subscribed channels, and subscription dates.

API Endpoints
GET /: This is the default route that renders the index.html file when the app is launched.
GET /subscribers: Returns an array of all subscribers in the database.
GET /subscribers/names: Returns an array of subscribers with only two fields, their name and subscribed channel.
GET /subscribers/:id : Returns information about a subscriber based on their ID.

Application Folder Structure
src/app.js: Handles incoming HTTP requests and responses.
src/index.js: Connects to the server and starts it.
src/createDatabase.js: Used to create the MongoDB database.
src/data.js: Contains the data that needs to be connected to the database.
src/models/subscribers.js: Defines the schema for subscribers.
src/index.html: The home page for the application.

Installation
To run this project, make sure you have Node.js and MongoDB installed on your computer. Follow these steps:

Clone this repository to your local machine.
Navigate to the project directory and run npm install to install the required dependencies.
Create the database by running npm run build.
Start the server by running npm run start.
Dependencies
This project relies on the following Node.js packages:

express: A web application framework for Node.js that simplifies the creation of RESTful APIs.
mongoose: An Object Data Modeling (ODM) library for MongoDB, used to interact with the database.
Make sure to install these dependencies using npm install before running the application.

Usage
Once the server is up and running, you can make HTTP requests to the provided API endpoints to retrieve information about YouTube channel subscribers.

Access the default route at / to view the home page.
Use /subscribers to get a list of all subscribers.
Use /subscribers/names to get a list of subscribers with only their names and subscribed channels.
Use /subscribers/:id to retrieve information about a specific subscriber by their ID.
