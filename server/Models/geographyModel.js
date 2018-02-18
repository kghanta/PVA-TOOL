var pg =require('pg');

var connectionString = "postgres://postgres:Rama123456@localhost:5432/analytics";
var client = new pg.Client(connectionString);
client.connect();
var exportResult= [];

client.query('SELECT * FROM  dim_geography',function(error,result){
    if(error){
      console.log(error);
      client.end();
    }
    exportResult=result;
    module.exports.alldata=  exportResult.rows;
    // console.log(result.rows);
    client.end();
  });
