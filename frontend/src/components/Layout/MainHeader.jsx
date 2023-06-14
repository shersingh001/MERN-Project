import style from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo/logo.svg";
import HeaderNav from "./HeaderNav";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TbUserOff } from "react-icons/tb";
import HeaderSearchBar from "./HeaderSearchBar";
import { useState } from "react";
import { useUser } from "../../Context";

const MainHeader = () => {
	const [open, setOpen] = useState(false);
	const { user } = useUser();

	const searchBarHandler = () => {
		setOpen((pre) => !pre);
	};

	return (
		<>
			<header>
				<div className={style.main_header}>
					<div className={style.header_layout}>
						<HeaderNav />
						<div className={style.header_logo}>
							<div className={style.header_logo_col}>
								<Link to={"/home"}>
									<img
										src={logo}
										alt="logo-img"
									/>
								</Link>
							</div>
						</div>
						<div className={style.header_icons}>
							<ul>
								{open ? (
									<li>
										<Link onClick={searchBarHandler}>
											<RxCross2 />
										</Link>
									</li>
								) : (
									<li>
										<Link onClick={searchBarHandler}>
											<FiSearch />
										</Link>
									</li>
								)}
								<li>
									<Link to={user.isLoggedIn ? "/profile" : "/sign-in"}>
										{user.isLoggedIn ? <AiOutlineUser /> : <TbUserOff />}
									</Link>
								</li>
								<li>
									<Link
										to={"/cart"}
										title="Cart"
									>
										<BsCart3 />
										<span>0</span>
									</Link>
								</li>
								<li>
									<Link
										to={"/wishlist"}
										title="Whislist"
									>
										<FaRegHeart />
										<span>0</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			{open && <HeaderSearchBar />}
		</>
	);
};

export default MainHeader;
