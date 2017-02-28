import * as client from './connection';

client.cluster.healthb ({}, function (err, resp, status) {  
  console.log("-- Client Health --", resp);
});