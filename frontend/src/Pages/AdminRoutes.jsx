import { Outlet } from "react-router-dom";
import { useUser } from "../Context";

const AdminRoutes = () => {
	const { user } = useUser();
	return user.isLoggedIn && user.isAdmin && <Outlet />;
};

export default AdminRoutes;
