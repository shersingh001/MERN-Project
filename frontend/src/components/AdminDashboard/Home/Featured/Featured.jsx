import React from "react";
import style from "./Featured.module.css";
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {

    const featuredTargetPositive = `${style.featured_item_result} ${style.positive}`;
    const featuredTargetNegative = `${style.featured_item_result} ${style.negative}`;
	return (
		<div className={style.home_featured}>
			<div className={style.featured_top}>
				<h1 className={style.featured_title}>Total Revenue</h1>
				<MoreVert fontSize="small" />
			</div>
			<div className={style.featured_bottom}>
				<div className={style.featured_chart}>
					<CircularProgressbar
						value={70}
						text="70%"
					/>
				</div>
				<p className={style.featured_title}>Total sales made today</p>
				<p className={style.featured_amount}>$420</p>
				<p className={style.featured_desc}>
					Previous transactions processing. Last payments may not be included.
				</p>
				<div className={style.featured_summary}>
					<div className={style.featured_item}>
						<div className={style.featured_item_title}>Target</div>
						<div className={featuredTargetNegative}>
							<KeyboardArrowDown fontSize="small" />
							<div className={style.result_amount}>$12.4k</div>
						</div>
					</div>
					<div className={style.featured_item}>
						<div className={style.featured_item_title}>Last Week</div>
						<div className={featuredTargetPositive}>
							<KeyboardArrowUp fontSize="small" />
							<div className={style.result_amount}>$12.4k</div>
						</div>
					</div>
					<div className={style.featured_item}>
						<div className={style.featured_item_title}>Last Month</div>
						<div className={featuredTargetNegative}>
							<KeyboardArrowDown fontSize="small" />
							<div className={style.result_amount}>$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
