import React from "react";
import style from "./Wishlist.module.css";
import Footer from "../Footer/Footer";

const Wishlist = () => {
	let wishlistProduct;
	if (true) {
		wishlistProduct = (
			<tr>
				<td colSpan={6}>No products added to the wishlist</td>
			</tr>
		);
	} else {
		wishlistProduct = (
			<tr>
				<td>Sher singh</td>
				<td>48$</td>
				<td>Avaialble</td>
			</tr>
		);
	}
	return (
		<div className={style.container}>
			<div className={style.wishlist_wrapper}>
				<div className={style.wishlist_wrapper_heading}>
					<h2>My Wishlist</h2>
				</div>
				<div className={style.wishlist_table}>
					<table>
						<thead>
							<tr>
								<th>PRODUCT NAME</th>
								<th>UNIT PRICE</th>
								<th>STOCK STATUS</th>
							</tr>
						</thead>
						<tbody>{wishlistProduct}</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Wishlist;
