// Set up MySQL connection.
var mysql = require('mysql');

//connection info given by heroku jawsdb
//on local machine use .env file, on heroku use config vars
var connection = mysql.createConnection({
	host: process.env.HOST,
	port: process.env.DB_PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
