const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require("./config/keys");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(cors());
// allows for multiple base64 image strings to be added to the DB
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect(key);

const Recipe = require('./models/Recipe');

try{
    mongoose.connect(keys.mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("Welcome to the database Mr.Bond...");
} catch(err){
    console.log(err);
}

require("./routes/recipeDbRoutes.js")(app);

app.listen(PORT, () => {
    console.log(`server is listening on PORT: ${PORT}`);
})


