const Recipe = require("../models/Recipe");
// const mongoose = require("mongoose");

const mongoUtil = require('../utils/mongoUtil');

module.exports = (app) => {
    mongoUtil.connect((err, client) => {
        var db = mongoUtil.getDb();
        var col1 = "recipes"
        app.post("/create/new", async (req, res) => {
            // console.log(db);
            // let response  = await Recipe.post
    
            // const {
            //     about,
            //     basicInfo,
            //     beginner,
            //     photo,
            //     recipe,
            //     shopping
            // } = req.body;
        
            // const recipeObj = new Recipe({
            //     title: basicInfo.title,
            //     thumbnail: basicInfo.thumbnail,
            //     photos: basicInfo.photos,
            //     cookTime: basicInfo.cookTime,
            //     about,
            //     beginner,
            //     photo,
            //     recipe,
            //     shopping
            // })
        
            const recipeObj = new Recipe({
                title: "brian",
            });

            db.collection(col1).insertOne(recipeObj);
            res.send('added');
        });

        app.get("/recipe/get", async (req, res) => {
            console.log('recipe get');
            try {
                //to get all data from db.collection.find you need to convert to array
                let response = await db.collection(col1).find({}).toArray();

                console.log(response[0]);
            } catch(err){
                console.log('error here:', err);
            }
        });

    });
}