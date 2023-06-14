import React, { useState } from "react";
import style from "./Login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import { useUser } from "../../Context";
import useLoginUser from "../../hooks/useLoginUser";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loader, setLoader] = useState(false);
	const { user, setUser } = useUser();

	const navigate = useNavigate();
	const location = useLocation();

	const login = useLoginUser();

	const redirectPath = location.state?.path || "/home";

	const userEmailHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordHandler = (event) => {
		setPassword(event.target.value);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		const user = { email, password };
		if (email && password) {
			setLoader(true);
			const response = await login.mutateAsync(user);
			setLoader(false);
			if (response.status === 201) {
				const user = {
					token: response.token,
					_id: response._id,
					isLoggedIn: true,
					isAdmin: response.isAdmin,
				};
				setUser((draft) => {
					draft.token = user.token;
					draft._id = user._id;
					draft.isLoggedIn = user.isLoggedIn;
					draft.isAdmin = user.isAdmin;
				});
				localStorage.setItem("user", JSON.stringify(user));
				localStorage.setItem("token", user.token);
				if (user.isAdmin) {
					navigate("/admin");
				} else {
					navigate(redirectPath, { replace: true });
				}
				toast.success("successfully", {
					position: "top-center",
					pauseOnHover: false,
					autoClose: 300,
				});
			} else {
				setLoader(true);
				toast.error("Invalid credentials", {
					position: "top-center",
					pauseOnHover: false,
					autoClose: 1000,
				});
				setLoader(false);
			}
		} else {
			toast.error("All Field are Required", {
				position: "top-center",
				pauseOnHover: false,
				autoClose: 1000,
			});
		}
	};

	return (
		<div className={style.main_container}>
			<div className={style.login_form}>
				<h2>Sign in</h2>
				<form
					method="POST"
					onSubmit={submitHandler}
				>
					<label htmlFor="text">User Name</label>
					<input
						type="email"
						name="username"
						onChange={userEmailHandler}
						placeholder="Email"
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						onChange={passwordHandler}
						placeholder="Enter your password"
					/>
					{loader ? <Loader /> : <input type="submit" />}
					<ToastContainer />
				</form>
				<div className={style.new_account}>
					<Link to={"/sign-up"}>Create a new account</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
