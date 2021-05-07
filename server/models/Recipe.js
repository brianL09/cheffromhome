const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredients = new Schema({
    name: String,
    quantity: String,
    unit: String,
    type: String
});

const photo = new Schema({
    src: String,
    alt: String
});

const comment = new Schema({
    id: String,
    author: String,
    question: String,
    posted: String,
    responses: [
        {
            user: Object,
            response: String,
            posted: String,
        }
            ]
    });



const recipeSchema = new Schema({
    author: {
        author: String,
        userid: String
    },
    posted: String,
    edited: {type: String, default: "n/a"},
    basicInfo: {
        title: String,
        cookTime: String,
        thumbnail: photo,
        photos: [photo],
    },
    about: {
        title:String,
        difficulty: String,
        photo: photo,
        paragraphs: Array,
    },
    recipe: {
        directions:Array,
        yield: String,
        tips: Array,
        ingredients: [ingredients]
    },
    shopping:{
        meat: Array,
        vegetable: Array,
        dairy: Array,
        dry: Array,
    },
    beginner:{
        paragraphs: Array,
        photos: [photo],
    },
    comments: [comment]
});

module.exports = mongoose.model('Recipe', recipeSchema, "recipes");