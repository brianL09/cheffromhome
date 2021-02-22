// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const mongoUtil = require('../utils/mongoUtil');
module.exports = (app) => {
    mongoUtil.connect((err, client) => {
        var db = mongoUtil.getDb();
        var col1 = "recipes";
        var col2 = "users";

        app.post("/authentication/register", async (req, res) => {
            // Search DB for email match to see if user exsists
            let user = await db.collection(col2).findOne({email: req.body.email});
        
            if(user){
                res.send('This email is already in use.');
            } else {
                try{
                    const hashedPassword  = await bcrypt.hash(req.body.password, 10);
                    const newUser = {name: req.body.name, email: req.body.email, password: hashedPassword, recipes: [{title: "hello"}]};
                    const trimmedUser = {...newUser}
                    db.collection(col2).insertOne(newUser);
                    delete trimmedUser.password;
                    res.send(trimmedUser);
                } catch(err) {
                    throw err;
                }
            }
        });
    
        app.post("/authentication/login", async (req, res) => {
            //find user
            let user = await db.collection(col2).findOne({email: req.body.email});
            //compare input pw vs saved pw
            if(user){
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                delete user.password;
                validPassword ? res.send(user) : res.send("Incorrect password"); 
            } else {
                res.send("Sorry. We don't have a record of your email");
            }
        });

        app.get("/authentication/clear", async (req, res) => {
            db.collection(col2).remove();
            res.send();
        });

    });
}