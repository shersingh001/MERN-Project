import React from "react";
import style from "./Profile.module.css";
import useGetUser from "../../../hooks/useGetUser";
import Loader from "../../Loader/Loader";
import { useUser } from "../../../Context/index";
import SideBar from "../Sidebar/SideBar";
import NavBar from "../Navbar/NavBar";

const Profile = () => {
	const { user } = useUser();

	const { data, isLoading, isError } = useGetUser(user._id);

	if (isLoading) return <Loader />;

	if (isError) return null;

	return (
		<div className={style.admin_container}>
			<SideBar />
			<div className={style.admin_navbar}>
				<NavBar />
				<div className={style.adminInfo_container}>
					<div className={style.adminInfo_wrapper}>
						<div className={style.adminInfo_header}>
							<h2>Admin Profile</h2>
						</div>
						<div className={style.adminInfo_details_wrapper}>
							<div className={style.adminInfo_details_heading}>
								<ul>
									<li>Admin ID</li>
									<li>Full Name</li>
									<li>Mobile Number</li>
									<li>Email ID</li>
								</ul>
							</div>
							<div className={style.adminInfo_details_value}>
								<ul>
									<li>{data.data._id}</li>
									<li>{`${data.data.firstname} ${data.data.lastname}`}</li>
									<li>{data.data.phone}</li>
									<li>{data.data.email}</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={style.admin_logout}>
						<button>Edit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
