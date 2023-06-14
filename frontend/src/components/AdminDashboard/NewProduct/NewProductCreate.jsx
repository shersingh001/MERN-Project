import React, { useState } from "react";
import style from "./NewProductCreate.module.css";
import SideBar from "../Sidebar/SideBar";
import NavBar from "../Navbar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import uploadIcon from "../../../Assets/images/upload img icon/upload img icon.jpg";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import useProductAdd from "../../../hooks/useProductAdd";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../Loader/Loader";

const NewProductsCreate = () => {
	const [product, setProduct] = useState({
		title: "",
		price: "",
		description: "",
		category: "",
		stock: "",
	});
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	const addProduct = useProductAdd();

	let name, value;

	const productHandler = (event) => {
		name = event.target.name;
		value = event.target.value;
		setProduct({ ...product, [name]: value });
	};

	const uploadImgHandler = (event) => {
		setImage(event.target.files[0]);
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		if (
			!product.title &&
			!product.price &&
			!product.description &&
			!product.category &&
			!product.stock &&
			!product.image
		) {
			toast.error("field all required", {
				position: "top-center",
				pauseOnHover: false,
				autoClose: 300,
			});
		}

		const formData = new FormData();
		formData.append("image", image);
		formData.append("title", product.title);
		formData.append("price", product.price);
		formData.append("description", product.description);
		formData.append("category", product.category);
		formData.append("stock", product.stock);

		try {
			const response = await addProduct.mutateAsync(formData);
			if (response.ok) {
				toast.success("Product added Succusfully", {
					position: "top-center",
					pauseOnHover: false,
					autoClose: 300,
				});
				navigate("/admin/product");
			} else {
				toast.error("Product not submitted", {
					position: "top-center",
					pauseOnHover: false,
					autoClose: 300,
				});
			}
		} catch (error) {
			toast.success(error.message, {
				position: "top-center",
				pauseOnHover: false,
				autoClose: 300,
			});
		}
		setProduct({
			title: "",
			description: "",
			category: "",
			stock: "",
			price: "",
		});
		setImage("");
	};
	return (
		<div className={style.products_container}>
			<SideBar />
			<div className={style.products_navbar}>
				<NavBar />
				<div className={style.new_top}>
					<h2>Add New Product</h2>
				</div>
				<div className={style.new_bottom}>
					<div className={style.bottom_left}>
						<img
							src={image ? URL.createObjectURL(image) : uploadIcon}
							alt="upload-img-icon"
						/>
					</div>
					<div className={style.bottom_right}>
						<form
							method="POST"
							onSubmit={submitHandler}
						>
							<div className={style.form_input}>
								<label htmlFor="file">
									Image:
									<DriveFolderUploadOutlined className={style.img_icon} />
								</label>
								<input
									type="file"
									id="file"
									name="image"
									onChange={uploadImgHandler}
									style={{ display: "none" }}
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Title</label>
								<input
									type="text"
									placeholder="Chair"
									name="title"
									value={product.title}
									onChange={productHandler}
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Description</label>
								<input
									type="text"
									name="description"
									value={product.description}
									placeholder="Description"
									onChange={productHandler}
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Category</label>
								<input
									type="text"
									name="category"
									value={product.category}
									placeholder="Room or Office"
									onChange={productHandler}
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Price</label>
								<input
									type="text"
									name="price"
									value={product.price}
									placeholder="$000"
									onChange={productHandler}
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Stock</label>
								<input
									type="text"
									name="stock"
									value={product.stock}
									placeholder="in Stock"
									onChange={productHandler}
								/>
							</div>
							<div className={style.form_submit_btn}>
								{addProduct.isLoading ? (
									<Loader />
								) : (
									<button className={style.send_btn}>Upload</button>
								)}
								<ToastContainer />
								<Link
									to={"/admin/product"}
									className={style.cancle_btn}
								>
									Back
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewProductsCreate;
