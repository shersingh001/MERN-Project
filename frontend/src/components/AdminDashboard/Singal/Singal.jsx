import React from "react";
import style from "./Singal.module.css";
import SideBar from "../Sidebar/SideBar";
import NavBar from "../Navbar/NavBar";
import profile from "../../../Assets/images/profile/FjU2lkcWYAgNG6d.jpg";
import Chart from '../Home/Chart/Chart';
import Table from '../Home/Table/Table';

const SingalUser = ({title, aspect}) => {
	return (
		<div className={style.singalUser_container}>
			<SideBar />
			<div className={style.singalUser_wrapper}>
				<NavBar />
				<div className={style.user_top}>
					<div className={style.user_top_left}>
						<div className={style.user_edit_btn}>Edit</div>
						<h2 className={style.user_title}>Information</h2>
						<div className={style.user_item}>
							<img
								src={profile}
								alt="avatar"
								className={style.user_item_img}
							/>
							<div className={style.user_details}>
								<h3>John roy</h3>
								<div className={style.details_item}>
									<span className={style.itemKey}>Email: </span>
									<span className={style.itemValue}>johnroy@gmail.com</span>
								</div>
								<div className={style.details_item}>
									<span className={style.itemKey}>Phone: </span>
									<span className={style.itemValue}>+91 2345 6789</span>
								</div>
								<div className={style.details_item}>
									<span className={style.itemKey}>Address: </span>
									<span className={style.itemValue}>Elton st. 234 Garden Yd. NewYork </span>
								</div>
								<div className={style.details_item}>
									<span className={style.itemKey}>Country: </span>
									<span className={style.itemValue}>India</span>
								</div>
							</div>
						</div>
					</div>
					<div className={style.user_top_right}>
                        <Chart title={"User Spending (Last 6 Month)"} aspect={3 / 1}/>
                    </div>
				</div>
				<div className={style.user_bottom}>
                    <h2>Last Transtions</h2>
                    <Table />
                </div>
			</div>
		</div>
	);
};

export default SingalUser;
