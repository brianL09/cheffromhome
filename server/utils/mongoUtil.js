const keys = require('../config/keys');
const MongoClient = require('mongodb').MongoClient;

var _db;

module.exports = {
    connect: function(callback){
        MongoClient.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
            if(err){console.log("BRIAN HERddE:", keys.mongoURI)}
            _db = client.db('recipe');
            return callback(err);
        });
    },
    getDb: function(){
        return _db;
    }
}

