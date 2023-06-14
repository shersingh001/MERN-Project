import { createBrowserRouter } from "react-router-dom";
// * Route
import Error404 from "../components/Error404/Error404";

//Auth Route
import AuthRoutes from "./AuthRoutes";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import HomePage from "./HomePage/HomePage";
import Contact from "../components/Contact/Contact";
import ShopPage from "./ShopPage/ShopPage";

// Private Route
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../components/UserProfile/UserProfile";
import Wishlist from "../components/Wishlist/Wishlist";
import ProductPage from "./ProductPage/ProductPage";
import BlogPage from "./BlogPage/BlogPage";
import CartPage from "./CartPage/CartPage";

// Admin Route
import AdminRoutes from "./AdminRoutes";
import AdminHome from "./AdminPage/AdminHome";
import AdminUser from "./AdminPage/AdminUser";
import AdminSingal from "./AdminPage/AdminSingal";
import AdminNewUser from "./AdminPage/AdminNewUser";
import AdminProducts from "./AdminPage/AdminProducts";
import AdminNewProducts from "./AdminPage/AdminNewProducts";
import AdminProfile from "./AdminPage/AdminProfile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthRoutes />,
		errorElement: <Error404 />,
		children: [
			{ path: "*", element: <Error404 /> },
			{ path: "/", element: <HomePage /> },
			{ path: "/home", element: <HomePage /> },
			{ path: "/sign-in", element: <Login /> },
			{ path: "/sign-up", element: <SignUp /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/shop", element: <ShopPage /> },
		],
	},
	{
		element: <PrivateRoutes />,
		children: [
			{ path: "/blog", element: <BlogPage /> },
			{ path: "/profile", element: <UserProfile /> },
			{ path: "/cart", element: <CartPage /> },
			{ path: "/wishlist", element: <Wishlist /> },
			{ path: "/shop/product", element: <ProductPage /> },
		],
	},
	{
		element: <AdminRoutes />,
		children: [
			{ path: "/admin", element: <AdminHome /> },
			{ path: "/admin/user", element: <AdminUser /> },
			{ path: "/admin/user:id", element: <AdminSingal /> },
			{ path: "/admin/user/new", element: <AdminNewUser /> },
			{ path: "/admin/product", element: <AdminProducts /> },
			{ path: "/admin/product/new", element: <AdminNewProducts /> },
			{ path: "/admin/profile", element: <AdminProfile /> },
		],
	},
]);

export default router;
