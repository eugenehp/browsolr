/**
 * Add documents into the Solr index.
 */

// Use `var solr = require('solr-client')` in your code 
var solr = require('solr-client');
var console = require("console-browserify");

// Create a client
var client = solr.createClient({
	host : '127.0.0.1',
	port : '8983',
	core:'collection1',
	path : '/solr'
});

// Switch on "auto commit", by default `client.autoCommit = false`
client.autoCommit = true;

var docs = [];
for(var i = 0; i <= 10 ; i++){
   var doc = {
       id : 23456 + i,
       title_t : "Title "+ i,
       description_t : "Text"+ i + "Alice"
   }
   docs.push(doc);
}

// Add documents
client.add(docs,function(err,obj){
   if(err){
      console.log(err);
   }else{
      console.log(obj);
   }
});
