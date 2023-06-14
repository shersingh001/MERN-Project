import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/apiClient";

const useGetUser = (id) =>
	useQuery({
		queryKey: ["user"],
		queryFn: () =>
			apiClient
				.get(`user/getuser?_id=${id}`)
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});

export default useGetUser;
