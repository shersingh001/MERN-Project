import React from "react";
import {
	Search,
	Language,
	Chat,
	List,
	Notifications,
} from "@mui/icons-material";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import profileImg from '../../../Assets/images/profile/FjU2lkcWYAgNG6d.jpg';

const NavBar = () => {
	return (
		<div className={style.main_header}>
			<div className={style.header_container}>
				<div className={style.header_input}>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Type for Search"
					/>
					<Search />
				</div>
				<div className={style.nav_items_wrapper}>
					<div className={style.nav_item}>
						<Language />
						English
					</div>
					<div className={style.nav_item}>
						<List />
					</div>
					<div className={style.nav_item}>
						<Chat />
                        <div className={style.notification_count}>1</div>
					</div>
					<div className={style.nav_item}>
						<Notifications />
                        <div className={style.notification_count}>2</div>
					</div>
                    <div className={style.nav_item}>
                        <img className={style.avatar} src={profileImg} alt="profile-img" />
                    </div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
