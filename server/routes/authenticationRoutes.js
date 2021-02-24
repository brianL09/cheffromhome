// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const mongoUtil = require('../utils/mongoUtil');
module.exports = (app) => {
    mongoUtil.connect((err, client) => {
        if(err) throw err;
        var db = mongoUtil.getDb();
        var userCollection = "users";

        app.post("/authentication/register", async (req, res) => {
            // Search DB for email match to see if user exsists
            let user = await db.collection(userCollection).findOne({email: req.body.email});
        
            if(user){
                res.send('This email is already in use.');
            } else {
                try{
                    const hashedPassword  = await bcrypt.hash(req.body.password, 10);
                    const newUser = {username: req.body.name, email: req.body.email, password: hashedPassword, recipes: []};
                    // await insertion to collection before mutating the object or create a copy of the object and mutate that?
                    // const trimmedUser = {...newUser};
                    await db.collection(userCollection).insertOne(newUser);
                    //delete Object[key] removes the key from the object
                    // delete trimmedUser.password;
                    delete newUser.password;
                    res.send(newUser);
                } catch(err) {
                    throw err;
                    res.send();
                }
            }
        });
    
        app.post("/authentication/login", async (req, res) => {
            //find user
            let user = await db.collection(userCollection).findOne({email: req.body.email});
            //compare input pw vs saved pw
            if(user){
                const validPassword = await bcrypt.compare(req.body.password, user.password);
                delete user.password;
                validPassword ? res.send(user) : res.send("Incorrect password"); 
            } else {
                res.send("Sorry. We don't have a record of your email");
            }
        });

        app.get("/authentication/user/:id", async (req, res) => {
            const response = await db.collection(userCollection).findOne({}, {_id: req.params.id});
            res.send(response);
        });

        app.get("/authentication/clear", async (req, res) => {
            db.collection("recipes").remove();
            db.collection(userCollection).remove();
            res.send();
        });

    });
}