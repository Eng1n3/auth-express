require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 8001;

function getDatabaseUri() {
	const dbUser = process.env.DATABASE_USER || u0_a248;
	const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "Example_4pp";
	const dbHost = process.env.DATABASE_HOST || "localhost";
	const dbPort = process.env.DATABASE_PORT || "5432";
	const dbName = process.env.DATABASE_NAME || "wedding_registration";
	return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
}

console.log("Config wedding registration:".green);
console.log("PORT:".blue, PORT);
console.log("Database URI:".blue, getDatabaseUri());

module.exports = {
	PORT,
	getDatabaseUri
}
