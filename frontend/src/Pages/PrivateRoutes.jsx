import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../Context/index";
import MainHeader from "../components/Layout/MainHeader";

const PrivateRoutes = () => {
	const { user } = useUser();

	if (!user.isLoggedIn) return <Navigate to="/sign-in" />;

	return (
		user.isLoggedIn && (
			<>
				<MainHeader />
				<Outlet />
			</>
		)
	);
};

export default PrivateRoutes;
