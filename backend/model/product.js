import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		minlenth: 3,
		maxLength: 100,
	},
	price: {
		type: Number,
		required: true,
		trim: true,
		default: 0.0,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
		trim: true,
		enum: {
			values: [
				"bedroom",
				"dining",
				"home",
				"office",
				"living",
				"outdoor",
				"packages",
			],
			message: "please select correct category for product",
		},
	},
	seller: {
		type: String,
	},
	stock: {
		type: Number,
		required: true,
		trim: true,
		default: 0,
	},
	ratings: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				required: true,
			},
			comment: {
				type: String,
				required: true,
			},
			user: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: "User",
			},
		},
	],
	numOfReviews: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	deleteAt: {
		type: Date,
		default: null,
	},
});

const products = mongoose.model("products", productSchema);

export default products;
