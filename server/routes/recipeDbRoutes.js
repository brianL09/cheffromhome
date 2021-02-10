const Recipe = require("../models/Recipe");
const mongoose = require("mongoose");

module.exports = (app) => {
    app.post("/create/new", async (req, res) => {
        console.log('new route hit');
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
    
        // recipeObj.save((err) => {
        //     err;
        // });
    });

    app.get("/recipe/get", async (req, res) => {
        let arr = [];
        const response = await Recipe.find({}, {title: 1}).then(res => {
            res.map(entry => {
                entry.title.length > 0 ? arr.push(entry) : null
            })
        });

        console.log(arr);
        res.send(arr);
    });

}