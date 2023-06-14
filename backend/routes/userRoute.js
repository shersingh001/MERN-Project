import express from "express";
import checkUserAuth from "../middleware/checkAuth.js";
import UserController from "../controller/userController.js";
import productController from "../controller/productController.js";
import upload from "../helper/storage.js";

const router = express.Router();

// User Routes
router.get("/user/getuser", checkUserAuth, UserController.getUser);
router.post("/user/sign-up", UserController.userRegistration);
router.post("/user/login", UserController.userLogin);

// Product Routes
router.post(
	"/product/new-product",
	checkUserAuth,
	upload.single("image"),
	productController.productAdd
);
router.get("/product", productController.productGet);

export default router;
