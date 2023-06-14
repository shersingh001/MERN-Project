import { createContext, useContext } from "react";
import { useImmer } from "use-immer";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const localUser = JSON.parse(localStorage.getItem("user"));
	const [user, setUser] = useImmer({
		_id: localUser?._id || "",
		token: localUser?.token || "",
		isLoggedIn: localUser?.isLoggedIn || false,
		isAdmin: localUser?.isAdmin || false,
	});

	return (
		<Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
	);
};

const useUser = () => {
	const { user, setUser } = useContext(Context);
	return { user, setUser };
};

export { ContextProvider, useUser };
