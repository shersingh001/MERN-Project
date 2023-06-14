import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
			maxlength: 255,
		},
		lastname: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
			maxlength: 255,
		},
		phone: {
			type: Number,
			required: true,
			unique: true,
			trim: true,
			minlength: 10,
			maxlength: 13,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3,
			maxlength: 255,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
			maxlength: 255,
		},
		cpassword: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
			maxlength: 255,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

// Model
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
