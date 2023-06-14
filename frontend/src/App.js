import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./Context";
import router from "./Pages/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<RouterProvider router={router} />
			</ContextProvider>
		</QueryClientProvider>
	);
};

export default App;
