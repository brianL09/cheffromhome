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

            const recipeObj = new Recipe({
                basicInfo,
                about,
                beginner,
                photo,
                recipe,
                author,
                posted: new Date().toUTCString()
            });

            db.collection(recipesCollection).insertOne(recipeObj);
            db.collection(userCollection).update({_id: ObjectId(author.userid)}, {$push: {recipes: recipeObj}});
            res.send();
        });

        app.get("/recipes/get", async (req, res) => {
            try {
                let response = [];
                //to get all data from db.collection.find you need to convert to array
                await db.collection(recipesCollection).find({}).toArray()
                    .then((res) => {
                        res.map((item) => {
                            let obj = {
                                id: item._id,
                                title: item.basicInfo.title,
                                author: item.author.author,
                                description: item.about.paragraphs[0],
                                thumbnail: {src: item.basicInfo.thumbnail.src, alt: item.basicInfo.thumbnail.alt},
                                cookTime: item.basicInfo.cookTime,
                                difficulty: item.about.difficulty,
                            }

                            response.push(obj);
                        });
                    });
                    res.send(response);
            } catch(err){
                res.send();
            }
        });

        app.get("/recipes/get/:id", async (req, res) => {
            // console.log(req.params.id);
            try{
                let recipe = await db.collection(recipesCollection).findOne({_id: ObjectId(req.params.id) });
                res.send(recipe);
            } catch(err){
                res.send();
            }
        });

    });
}