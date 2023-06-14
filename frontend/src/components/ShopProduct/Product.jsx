import React from "react";
import style from "./Product.module.css";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import productImg from "../../Assets/images/Shop/bedroom-wall-closet.webp";

const Product = () => {
	return (
		<section className={style.product_container}>
			<div className={style.product_container_wrapper}>
				<div className={style.product_box}>
					<div className={style.product_box_backBtn}>
						<Link to={"/shop"}>
							<BsArrowLeft /> GO BACK
						</Link>
					</div>
					<div className={style.product_card}>
						<div className={style.product_card_wrapper}>
							<div className={style.product_card_imgs}>
								<img
									src={productImg}
									alt="product-img"
								/>
							</div>
							<div className={style.product_card_content}>
								<h2>Bedroom Wall Closet</h2>
								<span className={style.product_card_price}>
									$25.00 - $66.00
								</span>
								<p>
									An amazing product you can't refuse. Introduce the next big
									"Wow!" moment. What's the next moment of value- realization
									when using your product? Use this section to talk about it.
								</p>
								<div className={style.product_card_btns}>
									<button className={style.countBtn}>
										<IoIosArrowBack />
										<span>1</span>
										<IoIosArrowForward />
									</button>
									<button className={style.addCartBtn}>ADD TO CART</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
