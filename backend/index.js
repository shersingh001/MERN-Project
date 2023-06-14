import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routes/userRoute.js";
import connectDB from "./config/database.js";

const app = express();
const { PORT } = process.env;
const { MONGO_URI } = process.env;

//cors policy
app.use(cors());

// JSON
app.use(express.json());

// Mongo DB
connectDB(MONGO_URI);

// Routes
app.use("/api", router);

// use images
app.use(express.static("public"));

//server Listening
app.listen(PORT, () => {
	console.info(`Server is listening on PORT ${PORT}`);
});

export default app;
