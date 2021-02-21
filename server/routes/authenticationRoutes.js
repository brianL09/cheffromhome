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
                    const newUser = {name: req.body.name, email: req.body.email, password: hashedPassword}
                
                    db.collection(col2).insertOne(newUser);
                    res.send();
                } catch(err) {
                    throw err;
                }
            }
        });
    
        app.post("/authentication/login", async (req, res) => {
            //find user
            let user = await db.collection(col2).findOne({email: req.body.email});
            console.log(user);
            //compare input pw vs saved pw
            if(user){
                const decrypt = await bcrypt.compare(req.body.password, user.password);
                console.log('user');
                res.send(user);
            } else {
                console.log('no match');
                // res.status(401);
                res.send();
            }
        });

    });
}