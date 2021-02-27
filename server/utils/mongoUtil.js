const keys = require('../config/keys');
const MongoClient = require('mongodb').MongoClient;

var _db;

module.exports = {
    connect: function(callback){
        MongoClient.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
            if(err){console.log("BRIAN HERddE:", keys.mongoURI, err)}
            console.log('connected to mongo');
            _db = client.db('recipe');
            return callback(client, err);
        });
    },
    getDb: function(){
        return _db;
    }
}

