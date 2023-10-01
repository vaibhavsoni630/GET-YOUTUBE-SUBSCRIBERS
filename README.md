YouTube Channel Subscribers API

This is a simple RESTful API for getting information about YouTube channel subscribers. It is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB.

API Endpoints

/subscribers - Returns an array of all subscribers in the database.

/subscribers/names - Returns an array of subscribers with only two fields: their name and subscribed channel.

/subscribers/:id - Returns the specific subscriber with the given id.

Application Folder Structure
src/

├── app.js // For handling requests and responses.
├── index.js // To connect and start the server.
├── createDatabase.js // To create the database on MongoDB.
├── data.js // Data that has to be connected to the database.
├── models/subscribers.js // For the schema.
└── index.html // The home page for the application.

Installation.
Install Node.js and MongoDB on your computer.
Clone this repository to your local machine.
Install the required dependencies using npm install.
Create the database using npm run build.
Start the server using npm run start.

Dependencies.
express.
mongoose.

Usage.
To use the API, you can send HTTP requests to the endpoints defined above. For example, to get a list of all subscribers, you would send a GET request to the /subscribers endpoint. The response would be an array of JSON objects, each representing a subscriber.

You can also use the API to get information about a specific subscriber. To do this, you would send a GET request to the /subscribers/:id endpoint, where :id is the ID of the subscriber you want to get information about. The response would be a JSON object containing the subscriber's data.

Web Deployment.
The API is also deployed to the cloud on Render. You can access it at the following URL:
https://get-youtube-subscriber-db5m.onrender.com/
This API is a simple and easy-to-use way to get information about YouTube channel subscribers. It can be used to build a variety of applications that need to access this data.
