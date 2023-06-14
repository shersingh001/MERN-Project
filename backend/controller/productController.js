import productSchema from "../model/product.js";
import moment from "moment";

class productController {
	static productAdd = async (req, res) => {
		const { title, price, description, category, stock } = req.body;
		const image = req.file.path;

		if (!title || !price || !description || !category || !stock || !image) {
			return res.send({ status: 400, message: "All fields are required" });
		}
		try {
			const date = moment(new Date()).format("YYYY-MM-DD");
			const product = new productSchema({
				title: title,
				price: price,
				description: description,
				image: image,
				category: category,
				stock: stock,
				createdAt: date,
			});
			const productData = await product.save();
			console.log(productData);
			return res.json({
				message: "Product added successfully",
				data: productData,
			});
		} catch (error) {
			return res.send({ status: "error", message: error.message });
		}
	};

	static productGet = async (req, res) => {
		try {
			const products = await productSchema.find();
			return res.json({ status: 201, data: products });
		} catch (error) {
			return res.send({ status: 401, message: error });
		}
	};

	static productDelete = async (req, res) => {
		try {
			const { id } = req.params;
			console.log(id);
			const deleteProduct = await productSchema.findByIdAndDelete({ _id: id });
			return res.json({ status: 201, message: deleteProduct });
		} catch (error) {
			return res.send({ status: 401, message: "Product not deleted" });
		}
	};
}

export default productController;
