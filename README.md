Simple YouTube Channel Subscribers API

This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB.

API Endpoints

/ - This default route will render the index.html file when the app launches.
/subscribers - This endpoint returns an array of all subscribers in the database.
/subscribers/names - This endpoint returns an array of subscribers with only two fields, their name and subscribed channel.
Application Folder Structure

src/
├── app.js // For handling requests and responses
├── index.js // To connect and start the server
├── createDatabase.js // To create database on MongoDB
├── data.js // Data that has to be connected to a database
├── models/subscribers.js // For the schema
└── index.html // The home page for the application
Installation

Install Node.js and MongoDB on your computer.
Clone this repository to your local machine.
Install the required dependencies using npm install.
Create the database using npm run build.
Start the server using npm run start.
Dependencies

express
mongoose

Visit The App Through This Link -- https://get-youtube-subscribers-kfrn.onrender.com/
