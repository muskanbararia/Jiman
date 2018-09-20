const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'food';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  createValidated(db, function() {
    client.close();
  });
});

function createValidated(db, callback) {
  db.createCollection("user", 
	   {
	      'validator': { '$and':
	         [
	            { 'phone': { '$type': "string" } },
	            { 'email': { '$regex': /^\w+\@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ } },
		    {'name':{'$type':"string"}}
	         ]
	      }
	   },
    function(err, results) {
      console.log("Collection created.");
      callback();
    }
  );
db.createCollection("recipe", 
	   {
	      'validator': { '$and':
	         [
	            { 'category': { '$in':["Veg","Non-Veg"]} },
	            { 'auth': { '$regex': /^\w+\@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ } }
	         ]
	      }
	   },
    function(err, results) {
      console.log("Collection created.");
      callback();
    }
  );
};
