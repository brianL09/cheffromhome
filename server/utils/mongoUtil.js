const keys = require('../config/keys');
const MongoClient = require('mongodb').MongoClient;

var _db;

module.exports = {
    connect: function(callback){
        MongoClient.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
            if(err){console.log("ERROR HERE:", err)}
            _db = client.db('recipe');
            return callback(client);
        });
    },
    getDb: function(){
        return _db;
    }
}

