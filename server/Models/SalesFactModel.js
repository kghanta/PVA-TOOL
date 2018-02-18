var pg =require('pg');

var connectionString = "postgres://postgres:Rama123456@localhost:5432/analytics";
var client = new pg.Client(connectionString);
client.connect();
var sales_fact= [];

client.query('SELECT * FROM  sales_fact',function(error,result){
  if(error){
    console.log(error);
    client.end();
  }
  sales_fact=result;
  module.exports.alldata=  sales_fact.rows;

  client.end();
});
