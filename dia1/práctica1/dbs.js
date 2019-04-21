//dbs.js
var relacionales=["Mysql","PostgreSQL","Oracle","MS SQL Server"];
var noRelacionales=["mongo","CouchDB","Cassandra"];
var databases=[relacionales,noRelacionales];
console.log(databases);
console.log(databases[0][1]);
