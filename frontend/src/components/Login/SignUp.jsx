import React, { useState } from "react";
import style from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../../Assets/images/signin or signup/sign-up.jpg";
import useRegisterUser from "../../hooks/useRegisterUser";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader/Loader";

const SignUp = () => {
	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		phone: "",
		email: "",
		password: "",
		cpassword: "",
	});
	const [isAdmin, setIsAdmin] = useState(false);
	const [loader, setLoader] = useState(false);

	const navigate = useNavigate();
	const register = useRegisterUser();

	let name, value;

	const userHandler = (event) => {
		name = event.target.name;
		value = event.target.value;
		setUser({ ...user, [name]: value });
	};

	const adminHandler = (event) => {
		if (event.target.checked) {
			setIsAdmin(true);
		} else {
			setIsAdmin(false);
		}
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		const { firstname, lastname, phone, email, password, cpassword } = user;
		const userDetails = {
			firstname,
			lastname,
			phone,
			email,
			password,
			cpassword,
			isAdmin,
		};
		if (firstname && lastname && phone && email && password && cpassword) {
			if (password === cpassword) {
				setLoader(true);
				const response = await register.mutateAsync(userDetails);
				setLoader(false);
				if (response.status === 201) {
					navigate("/sign-in");
				} else {
					setLoader(true);
					if (response.status === 501) {
						toast.error(
							`used data ${JSON.stringify(response.message.keyValue)}`,
							{
								position: "top-center",
								pauseOnHover: false,
								autoClose: 1000,
							}
						);
					} else {
						toast.error("unable to register", {
							position: "top-center",
							pauseOnHover: false,
							autoClose: 1000,
						});
					}
					setLoader(false);
				}
			} else {
				toast.error("Password and Confirm Password Doesn't Match", {
					position: "top-center",
					pauseOnHover: false,
					autoClose: 1000,
				});
			}
		} else {
			toast.error("All Fields are Required", {
				position: "top-center",
				pauseOnHover: false,
				autoClose: 1000,
			});
		}
	};
	return (
		<div className={style.main_container}>
			<div className={style.login_form}>
				<h2>Sign Up</h2>
				<form
					id="registration-form"
					method="POST"
					onSubmit={submitHandler}
				>
					<div className={style.user_type}>
						<input
							type="checkbox"
							name="isAdmin"
							onChange={adminHandler}
						/>
						Admin
					</div>
					<div className={style.form_user_details}>
						{isAdmin && (
							<div>
								<label htmlFor="">Secret Key</label>
								<input
									type="text"
									name="secretKey"
									placeholder="Secret Key"
								/>
							</div>
						)}
						<div className={style.userName}>
							<div className={style.userName_first}>
								<label htmlFor="firstname">First Name</label>
								<input
									type="text"
									name="firstname"
									value={user.firstname}
									id="firstname"
									onChange={userHandler}
								/>
							</div>
							<div className={style.userName_last}>
								<label htmlFor="lastname">Last Name</label>
								<input
									type="text"
									name="lastname"
									value={user.lastname}
									id="lastname"
									onChange={userHandler}
								/>
							</div>
						</div>
						<label htmlFor="phone">Phone</label>
						<input
							type="number"
							name="phone"
							value={user.phone}
							id="phone"
							onChange={userHandler}
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={user.email}
							id="email"
							onChange={userHandler}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={user.password}
							onChange={userHandler}
						/>
						<label htmlFor="cpassword">Confirm Password</label>
						<input
							type="password"
							name="cpassword"
							value={user.cpassword}
							id="cpassword"
							onChange={userHandler}
						/>
						{loader ? <Loader /> : <input type="submit" />}
						<ToastContainer />
					</div>
				</form>
			</div>
			<div className={style.sign_up_img}>
				<img
					src={signUp}
					alt="sign-up-img"
				/>
				<div className={style.new_account}>
					<p>
						Already a member?<Link to={"/sign-in"}> Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
