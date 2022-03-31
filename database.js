/* Import Packages*/
var express = require("express");
var mysql = require("mysql");

/* Create a connection with the database (we created the DB in advance), we call is sql */
var sql = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "forum",
});

/* make the connection*/
sql.connect(function (err) {
  if (err) {
    console.error(
      "error connecting: " + err.stack
    ); /* if there is an error with the connection  */
    return;
  }
  console.log(
    "Connected as id" + sql.threadId
  ); /* if there is no error with the connection */

  /*  Create a table in the database  */
  /* this is a regular SQL statement for creating a table in a database */
  /*
  var MakeTable =
    "CREATE TABLE studentsinfo1(firstName varchar(250), lastName varchar(250), mobilePhone varchar(250), email varchar(250), message varchar(300))";
  sql.query(MakeTable, function (err, result) {
    if (err) {
      console.error("Can not create the table");
      return;
    }
    console.log("Table created successfully...");
  });
*/
  /*   Nothing important here, just to print cool stauff!   */
  /*
  function intervalFunc() {
    console.log("We will delete the table you just created! Wait and SEE!");
  }
  setInterval(intervalFunc, 1500);

  /*   Delete the Table   */
  /*
  var DelTable = "DROP TABLE studentsinfo1"; // this is a regular SQL statement for deleting a table //
  sql.query(DelTable, function (err, result) {
    if (err) {
      console.error("Can not Delete the table"); // if there is an error //
      return;
    }
    console.log("Table Deleted successfully..."); // if there is no error //
  });

  /*
sql.ping(function (err) { //ping the server
  if (err) throw err;
  console.log('Server responded to ping');
}) 
*/
});

/*onsole.log(sql)*/
