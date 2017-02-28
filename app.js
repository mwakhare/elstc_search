var elasticsearch = require ('elasticsearch');

var client = new elasticsearch.Client (
{
  host: 'localhost:9200',
  log: 'trace'
});

client.ping (
{
  // ping usually has a 3000ms timeout
    requestTimeout: 1000
}, function (error) 
{
  if (error) 
  {
    console.trace ('elasticsearch cluster is NOT connectced!');
  } 
  else 
  {
    console.log ('Connection is established.');
  }
});

client.index ({ index: 'myusers', type: 'user', id : 111, body: {name: "vijay", city: "pune"}}, function(err, results) 
{
    if (err)
    {
      console.log ("Error-client.create + " + err);
      return;
    }
    
    console.log (results);
  });

client.search (
{
  index: 'myusers',
  type: 'user',
  body: {
    query: {
      match: {
        name: "vijay"
      }
    }
  }
}).then(function (resp) 
{
    var hits = resp.hits.hits;
}, function (err) 
{
    console.trace(err.message);
});

