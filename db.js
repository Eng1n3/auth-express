const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");

const db = new Client({ connectionString: getDatabaseUri() });

db.connect((err) => {
	if (err) {
		console.error("Error to connect database".red);
	} else {
		console.log("Successfully to connect database".blue);
	}
})

module.exports = db;
