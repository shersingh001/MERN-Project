import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/Layout/MainHeader";

const AuthRoutes = () => {
	// if (user.isLoggedIn) return <Navigate to="/" />;

	return (
		<>
			<MainHeader />
			<Outlet />
		</>
	);
};

export default AuthRoutes;
