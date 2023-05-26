const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb+srv://MAH:MAH1997@cluster0.sng4c.mongodb.net/Tourism_site?authSource=admin&replicaSet=atlas-hejujk-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");

  })
  .catch(err => {
    console.error("Connection error", err);

  });

// db configuaration ends here
//registering cors
app.use(cors());
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure body-parser ends here
app.use(morgan("dev")); // configire morgan


// simple route
app.get("/", (req, res) => {
  console.log("Hello MEVN Soldier");
});

app.use('/uploads', express.static('uploads'));

const userRoutes = require("./app/route/user"); //bring in our user routes
app.use("/user", userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
