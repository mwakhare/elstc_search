import {elasticsearch} from 'elasticsearch';

var client = new elasticsearch.Client ( 
{  
        host: 'localhost: 9200',
        log: 'trace'
});

export = client;