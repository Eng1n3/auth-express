const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class User {

	static async login(data) {
		throw new BadRequestError("Coba Error", "Error login function");
	}

	static async register(credentials) {
		const requiredFields = ["email", "password", "rsvpStatus", "numGuest"];
		requiredFields.forEach(field => {
			if (!credentials.hasOwnProperty(field)) {
				throw new BadRequestError(`Missing ${field} in request body.`, "Error logout function");
			}
		})
		if (credentials.email.indexOf('@') < 0) {
			throw new BadRequestError("Invalid email.", "Error register function");
		}
		const existingEmail = await User.fetchUserByEmail(credentials.email);
		if (existingEmail) {
			throw new BadRequestError(`Duplicate email: ${credentials.email}`)
		}
		console.log(26);
		const toLowerCaseEmail = credentials.email.toLowerCase();
		const result = await db.query(`
			INSERT INTO users (
				email,
				password,
				rsvp_status,
				num_guest
			)
			VALUES ($1, $2, $3, $4)
			RETURNING id, email, rsvp_status, num_guest, created_at;
		`, [toLowerCaseEmail, credentials.password, credentials.rsvpStatus, credentials.numGuest]);
		const user = result.rows[0];
		return user;
	}

	static async fetchUserByEmail(email) {
		if (!email) {
			throw new BadRequestError("No email provided", "Error fetchUserByEmail function");
		}

		const query = `SELECT * FROM users WHERE email = $1`;
		const result = await db.query(query, [email.toLowerCase()]);
		const user = result.rows[0];

		return user;
	}
}

module.exports = User;
