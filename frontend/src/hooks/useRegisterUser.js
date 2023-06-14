import { useMutation } from "@tanstack/react-query";
import apiClient from "../api/apiClient";

const useRegisterUser = () =>
	useMutation((user) =>
		apiClient
			.post("user/sign-up", user)
			.then((res) => res.data)
			.catch((err) => console.log(err))
	);

export default useRegisterUser;
