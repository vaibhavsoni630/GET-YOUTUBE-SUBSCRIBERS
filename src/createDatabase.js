const mongoose = require("mongoose");
const subscriberModel = require("./models/subscriber");
const data = require("./data");

mongoose.connect("mongodb+srv://vasusoni630:vasu1234@cluster0.au7mouj.mongodb.net/?retryWrites=true&w=majority", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error("Database connection error:", error));
db.once("open", async () => {
     console.log("Connected to database");

     const refreshAll = async () => {
          await subscriberModel.deleteMany({});
          // console.log(connection)
          await subscriberModel.insertMany(data);
          await mongoose.disconnect();
     };
     refreshAll();
});
