import React from "react";
import style from "./Cart.module.css";
import productImg from "../../Assets/images/Home-page/product/corner-chair.webp";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../Footer/Footer";

const Cart = () => {
	const allItemRemoveHandler = () => {};

	const incressment = () => {};

	const decressment = () => {};

	const submitHandler = (event) => {
		event.preventDefault();
	};
	return (
		<section>
			<div className={style.container}>
				<div className={style.container_wrapper}>
					<div className={style.cart_heading}>
						<h2>Shopping Cart</h2>
					</div>
					<div className={style.go_back_link}>
						<Link to={"/shop"}>
							<BsArrowLeft /> CONTINUE SHOPPING
						</Link>
					</div>
					<div className={style.cart_table}>
						<table>
							<thead>
								<tr>
									<th>PRODUCT</th>
									<th>PRICE</th>
									<th>QUANTITY</th>
									<th>SUBTOTAL</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className={style.table_img}>
										<img
											src={productImg}
											alt="chair"
										/>
										Bedroom Wall Closet
									</td>
									<td>$25.00</td>
									<td>2</td>
									<td>$50.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Cart;
