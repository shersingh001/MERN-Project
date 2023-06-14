// import React, { useEffect, useState } from "react";
import style from "./ProductsList.module.css";
import SideBar from "../Sidebar/SideBar";
import NavBar from "../Navbar/NavBar";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import moment from "moment";
// import productImg from "../../../Assets/images/Home-page/product/corner-chair.webp";
import useGetProduct from "../../../hooks/useGetProduct";
// import useDeleteProduct from "../../../hooks/useDeleteProduct";
// import { productRows, productcolumns } from "../../../DummyData";
// import { DataGrid } from "@mui/x-data-grid";
// import { DeleteOutline } from "@mui/icons-material";

const ProductsList = () => {
	// const [getdata, setGetData] = useState([]);
	// console.log(getdata[0]);

	const { data, isError, isLoading } = useGetProduct();

	// const DeleteHandler = (id) => {
	// 	const deleteProduct = useDeleteProduct(id);
	// 	console.log(deleteProduct);
	// };
	// const deleteHandler = (id) => {

	// };
	if (isError) return "Something Wrong";
	if (isLoading) return <Loader />;

	return (
		<div className={style.productsList_container}>
			<SideBar />
			<div className={style.productsList_wrapper}>
				<NavBar />
				<div className={style.productsList_head}>
					<p>Add New Product</p>
					<Link to={"/admin/product/new"}>Add New</Link>
				</div>
				<div className={style.product_card_container}>
					{data.data.length > 0
						? data.data.map((product) => {
								return (
									<div
										className={style.product_card}
										key={product._id}
									>
										<img
											src={product.image}
											alt={product.title}
										/>
										<div>
											<h3>{product.title}</h3>
											<span>
												Date Added: {moment(product.createdAt).format("L")}
											</span>
											<div className={style.card_btn}>
												<button
													// onClick={() => DeleteHandler(product._id)}
													className={style.card_delete_btn}
												>
													Delete
												</button>
												<button className={style.card_edit_btn}>Edit</button>
											</div>
										</div>
									</div>
								);
						  })
						: "Product Not Added yet"}
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
