const ObjectId = require('mongodb').ObjectID;
const mongoUtil = require('../utils/mongoUtil');
const Recipe = require("../models/Recipe");

module.exports = (app) => {
    mongoUtil.connect((err, client) => {
        var db = mongoUtil.getDb(),
         recipesCollection = "recipes",
         userCollection = "users";
        app.post("/recipes/new", async (req, res) => {
            const {
                basicInfo,
                about,
                recipe,
                beginner,
                shopping,
                photo,
            } = req.body.recipe;

            const author = { author: req.body.author.author, userid: req.body.author.userid};
            let posted = new Date();
            console.log(author);

            const recipeObj = new Recipe({
                basicInfo,
                about,
                beginner,
                photo,
                recipe,
                author,
                posted: posted.toUTCString()
            });

            console.log(recipeObj);

            db.collection(recipesCollection).insertOne(recipeObj);
            db.collection(userCollection).update({_id: ObjectId(author.userid)}, {$push: {recipes: recipeObj}})
        });

        app.get("/recipe/get", async (req, res) => {
            try {
                //to get all data from db.collection.find you need to convert to array
                let response = await db.collection(recipesCollection).find({}).toArray();
            } catch(err){
                res.send();
            }
        });

    });
}