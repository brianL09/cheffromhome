if(process.env.NODE_ENV === "production"){
    module.exporfts = require("./prod");
} else {
    module.exports = require("./dev");
}