// "use strict";
// var client = require("./connection");
// client.cluster.healthb({}, function (err, resp, status) {
//     console.log("-- Client Health --", resp);
// });

var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
  console.log("constituencies",resp);
});