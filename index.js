const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const { PORT } = require("./config");
const { NotFoundError } = require("./utils/errors");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", authRoutes);
app.use((req, res, next) => {
	return next(new NotFoundError())
});
app.use((err, req, res, next) => {
	console.log(err);
	message = err.message || "Internal server error.";
	statusCode = err.statusCode || 500;
	res.json({
		headers: {
			statusCode
		},
		message,
	});
})

server.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
