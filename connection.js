// "use strict";
// var elasticsearch_1 = require("elasticsearch");
// var client = new elasticsearch_1.elasticsearch.Client({
//     host: 'localhost: 9200',
//     log: 'trace'
// });
// module.exports = client;

var elasticsearch=require('elasticsearch');

// var client = new elasticsearch.Client( {  
//   host: 'localhost: 9200',
//   log: 'trace'
// });

var client = new elasticsearch.Client (
{
  host: 'localhost:9200',
  log: 'trace'
});

module.exports = client;  
