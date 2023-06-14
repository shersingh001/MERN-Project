import { useMutation } from "@tanstack/react-query";
import apiClient from "../api/apiClient";

const useLoginUser = () =>
	useMutation((user) =>
		apiClient
			.post("user/login", user)
			.then((res) => res.data)
			.catch((err) => console.log(err))
	);

export default useLoginUser;
