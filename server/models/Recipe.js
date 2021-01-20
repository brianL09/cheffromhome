const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredients = new Schema({
    name: String,
    quantity: String,
    unit: String,
    type: String
});

const recipeSchema = new Schema({
    title: String,
    posted: Date,
    edited: Date,
    cookTime: String,
    thumbnail: String,
    photos: Array,

    about: {
        title:String,
        difficulty: String,
        mainphoto: String,
        paragraphs: Array,
        //add photo array
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
        photos: Array,
    },

});

module.exports = mongoose.model('Recipe', recipeSchema);