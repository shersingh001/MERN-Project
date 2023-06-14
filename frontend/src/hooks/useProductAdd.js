import { useMutation } from "@tanstack/react-query";
import apiClient from "../api/apiClient";

const useProductAdd = () =>
	useMutation((product) =>
		apiClient
			.post("product/new-product", product, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			.then((res) => res)
			.catch((err) => console.log(err))
	);

export default useProductAdd;
