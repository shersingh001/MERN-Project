import React from "react";
import style from "./UserProfile.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context";
import useGetUser from "../../hooks/useGetUser";
import Loader from "../Loader/Loader";

const UserProfile = () => {
	const { user, setUser } = useUser();

	const navigate = useNavigate();
	const { data, isLoading, isError } = useGetUser(user._id);

	const logoutHandler = () => {
		setUser((draft) => {
			draft.token = "";
			draft._id = "";
			draft.isLoggedIn = false;
		});
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		navigate("/home");
	};

	if (isLoading) return <Loader />;

	if (isError) return null;

	return (
		<div className={style.userInfo_container}>
			<div className={style.userInfo_wrapper}>
				<div className={style.userInfo_header}>
					<h2>Profile Details</h2>
				</div>
				<div className={style.userInfo_details_wrapper}>
					<div className={style.userInfo_details_heading}>
						<ul>
							<li>User ID</li>
							<li>Full Name</li>
							<li>Mobile Number</li>
							<li>Email ID</li>
						</ul>
					</div>
					<div className={style.userInfo_details_value}>
						<ul>
							<li>{data.data._id}</li>
							<li>{`${data.data.firstname} ${data.data.lastname}`}</li>
							<li>{data.data.phone}</li>
							<li>{data.data.email}</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={style.user_logout}>
				<button onClick={logoutHandler}>Logout</button>
			</div>
		</div>
	);
};

export default UserProfile;
