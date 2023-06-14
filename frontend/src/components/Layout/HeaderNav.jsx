import React, { useEffect, useState } from "react";
import style from "./HeaderNav.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const HeaderNav = () => {
	const [screenSize, setScreenSize] = useState(window.innerWidth);
	const [toggle, setToggle] = useState(false);

	const toggleHandler = () => {
		setToggle((pre) => !pre);
	};

	const setDimension = () => {
		setScreenSize(window.innerWidth);
		if (screenSize > 1195) {
			setToggle(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", setDimension);
		return () => {
			window.removeEventListener("resize", setDimension);
		};
	}, [screenSize]);
	return (
		<>
			<nav>
				<ul className={toggle ? `${style.navbarActive}` : `${style.navbar}`}>
					<div className={style.nav_itemList_flex}>
						<div className={style.nav_itemList_position}>
							<li className={style.nav_itemList_display}>
								<NavLink to={"/home"}>Home</NavLink>
							</li>
						</div>
					</div>
					<div className={style.nav_itemList_flex}>
						<div className={style.nav_itemList_position}>
							<li className={style.nav_itemList_display}>
								<NavLink to={"/shop"}>Shop</NavLink>
							</li>
						</div>
					</div>
					<div className={style.nav_itemList_flex}>
						<div className={style.nav_itemList_position}>
							<li className={style.nav_itemList_display}>
								<NavLink to={"/blog"}>Blog</NavLink>
							</li>
						</div>
					</div>
					<div className={style.nav_itemList_flex}>
						<div className={style.nav_itemList_position}>
							<li className={style.nav_itemList_display}>
								<NavLink to={"/contact"}>Contact</NavLink>
							</li>
						</div>
					</div>
				</ul>
				<div className={style.mobile}>
					{!toggle ? (
						<AiOutlineMenu onClick={toggleHandler} />
					) : (
						<AiOutlineClose onClick={toggleHandler} />
					)}
				</div>
			</nav>
		</>
	);
};

export default HeaderNav;
