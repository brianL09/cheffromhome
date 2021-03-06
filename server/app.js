const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require("./config/keys");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const mongoUtil = require('./utils/mongoUtil.js');

app.use(cors());
// allows for multiple base64 image strings to be added to the DB
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '250mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect(key);

const Recipe = require('./models/Recipe');
const User = require('./models/User');

// let mongoClient = await MongoClient.connect(keys.mongoURI,
//     {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     },

const isUser = (req, res, next) => {
    console.log('logstuff fired');
    next();
    return true;
    console.log(req.body.name);
}

const otherStuff = (req, res, next) => {
    console.log('other stuff');
    next();
}

require("./routes/authenticationRoutes")(app);
require("./routes/recipeDbRoutes.js")(app);

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    // like our main.js file, or main.css file
    app.use(express.static("client/build"));
    console.log('in production');
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
    });
  }

    app.listen(PORT, () => {
        console.log(`server is listening on PORT: ${PORT}`);
    });   
     



