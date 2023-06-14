import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/apiClient";

const useDeleteProduct = (id) => {
	useQuery({
		queryKey: ["delete"],
		queryFn: () => {
			apiClient
				.delete(`/${id}`)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		},
	});
};

export default useDeleteProduct;
