import React from "react";
import style from "./SideBar.module.css";
import logo from "../../../Assets/images/logo/logo.svg";
import {
	AccountCircle,
	Settings,
	Logout,
	LocalShipping,
	HomeWork,
	FactCheck,
	StackedBarChart,
	NotificationsNone,
	Dashboard,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
	const navigate = useNavigate();

	const adminLogoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/sign-in");
	};
	return (
		<div className={style.sidebar}>
			<div className={style.sidebar_logo}>
				<img
					src={logo}
					alt="logo"
				/>
			</div>
			<hr />
			<div className={style.sidebar_list}>
				<ul>
					<p className={style.sidebar_list_heading}>MAIN</p>
					<Link to={"/admin"}>
						<li>
							<Dashboard />
							Dashboard
						</li>
					</Link>
					<p className={style.sidebar_list_heading}>LISTS</p>
					<Link to={"/admin/user"}>
						<li>
							<AccountCircle />
							Users
						</li>
					</Link>
					<Link to={"/admin/product"}>
						<li>
							<HomeWork />
							Products
						</li>
					</Link>
					<Link to={"/admin/orders"}>
						<li>
							<FactCheck />
							Orders
						</li>
					</Link>
					<Link to={"/admin/delivery"}>
						<li>
							<LocalShipping />
							Delivery
						</li>
					</Link>
					<p className={style.sidebar_list_heading}>USEFUL</p>
					<Link>
						<li>
							<StackedBarChart />
							Stats
						</li>
					</Link>
					<Link>
						<li>
							<NotificationsNone />
							Notification
						</li>
					</Link>
					<p className={style.sidebar_list_heading}>SERVICE</p>
					<Link>
						<li>
							<Settings />
							Settings
						</li>
					</Link>
					<p className={style.sidebar_list_heading}>USER</p>
					<Link to={"/admin/profile"}>
						<li>
							<AccountCircle />
							Profile
						</li>
					</Link>
					<li>
						<Logout />
						<span onClick={adminLogoutHandler}>Logout</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
