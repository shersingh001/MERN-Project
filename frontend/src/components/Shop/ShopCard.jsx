import React, { useEffect } from "react";
import style from "./ShopCard.module.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
// import LinkBtn from '../UI/Button/LinkBtn';
// import { useState } from 'react';
import img1 from "../../Assets/images/Home-page/product/corner-chair.webp";
import useGetProduct from "../../hooks/useGetProduct";

// const itemLoadCount = 6;

const ShopCard = () => {
	const { data, isError, isLoading } = useGetProduct();
	console.log(data.data);
	// const [count, setCount] = useState(itemLoadCount);

	// const loadMoreHandler = () => {
	//   setCount(count + itemLoadCount);
	// }

	return (
		<div className={style.card_container}>
			<div className={style.card_container_wrapper}>
				{/* { */}
				{/* items?.slice(0, count)?.map((list, index) => { */}
				{/* return( */}
				{data.data
					? data.data.map((list) => {
							return (
								<div className={style.card_product_wrapper}>
									<div className={style.product_card}>
										<picture>
											<Link
												to="/shop/product"
												className={style.img_link}
											>
												{" "}
												<img
													src={img1}
													alt={"chair"}
												/>{" "}
											</Link>
											<Link className={style.wishlist_link}>
												{" "}
												<AiOutlineHeart />{" "}
											</Link>
											{/* <LinkBtn className={style.select_btn_link}> Select Option</LinkBtn> */}
											{/* <LinkBtn className={style.quick_btn_link}>Quick More</LinkBtn> */}
										</picture>
									</div>
									<div className={style.product_info}>
										<span>
											<Link>{list.title}</Link>
										</span>
										<span>
											<strong>${list.price}</strong>
										</span>
									</div>
								</div>
							);
					  })
					: "Error"}
				{/* ) */}
				{/* }) */}
				{/* } */}
			</div>
			{/* {count < items?.length ?
        <div className={style.load_more_btn}>
          <LinkBtn onClick={loadMoreHandler}>LOAD MORE</LinkBtn>
        </div> : ""} */}
		</div>
	);
};

export default ShopCard;
