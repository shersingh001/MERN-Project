import UserModel from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
	static userRegistration = async (req, res) => {
		const { firstname, lastname, phone, email, password, cpassword, isAdmin } =
			req.body;

		try {
			const userExist = await UserModel.findOne({ email: email });

			if (userExist) {
				return res.send({ status: 401, message: "Email already exists" });
			} else {
				if (firstname && lastname && phone && email && password && cpassword) {
					if (password === cpassword) {
						try {
							const salt = await bcrypt.genSalt(10);
							const hashPassword = await bcrypt.hash(password, salt);
							const newUser = new UserModel({
								firstname: firstname,
								lastname: lastname,
								phone: phone,
								email: email,
								password: hashPassword,
								cpassword: hashPassword,
								isAdmin: isAdmin,
							});
							newUser
								.save()
								.then((response) => {
									if (response) {
										return res.send({
											status: 201,
											message: "Registration Succussfully",
										});
									}
								})
								.catch((err) => {
									if (err) {
										return res.send({
											status: 501,
											message: err,
										});
									}
								});
						} catch (error) {
							return res.send({ status: 402, message: error });
						}
					} else {
						return res.send({
							status: 403,
							message: "Password and Confirm Password doesn't match",
						});
					}
				} else {
					return res.send({ status: 404, message: "All field are required!" });
				}
			}
		} catch (error) {
			return res.send({ status: 500, message: "Network Error" });
		}
	};

	static userLogin = async (req, res) => {
		try {
			const { email, password } = req.body;

			if (email && password) {
				const user = await UserModel.findOne({ email: email });
				if (user) {
					const passwordIsMatch = await bcrypt.compare(password, user.password);
					if (user.email === email && passwordIsMatch) {
						// Generate JWT Token
						const token = jwt.sign(
							{ userID: user._id },
							process.env.JWT_SECRET_KEY,
							{ expiresIn: 34856 }
						);
						return res.send({
							status: 201,
							message: "Succusfully Login",
							token: token,
							_id: user._id,
							isAdmin: user.isAdmin,
						});
					} else {
						return res.send({ status: 401, message: "Invalid credentials" });
					}
				} else {
					return res.send({ status: 401, message: "User not found" });
				}
			} else {
				return res.send({ status: 401, message: "All fields are required" });
			}
		} catch (error) {
			return res.send({ status: 500, message: "Network Error" });
		}
	};

	static getUser = async (req, res) => {
		const { _id } = req.query;
		try {
			const user = await UserModel.findOne({ _id });
			if (user) {
				res.send({
					status: 200,
					message: "success",
					data: user,
				});
			} else {
				res.send({
					status: 404,
					message: "Error",
					data: null,
				});
			}
		} catch (error) {
			res.send({
				status: 500,
				message: "Error",
				data: error,
			});
		}
	};
}

export default UserController;
