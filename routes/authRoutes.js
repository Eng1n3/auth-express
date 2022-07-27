const User = require("../models/auth");
const router = require("express").Router();

router.get("/login", async (req, res, next) => {
	try {
		const testData = {name: "Adam"}
		const hasil = await User.login(testData);
		res.json({
			headers: {
				statusCode: 200,
			},
			data: hasil
		});
	} catch (err) {
		next(err)
	}
})

router.post("/register", async (req, res, next) => {
	try {
		const hasil = await User.register(req.body);
		res.json({
			headers: {
				statusCode: 200,
			},
			data: hasil
		});
	} catch (err) {
		next(err)
	}
})

module.exports = router;
