import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/apiClient";

const useGetProduct = () =>
	useQuery({
		queryKey: ["product"],
		queryFn: () =>
			apiClient
				.get("product", {
					headers: { "Content-Type": "application/json" },
				})
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});

export default useGetProduct;
