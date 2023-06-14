import mongoose from "mongoose";

const connectDB = async (MONGO_URI) => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.info("MongoDB connected successfully");
	} catch (error) {
		console.error("Connection to MongoDB failed");
	}
};

export default connectDB;
