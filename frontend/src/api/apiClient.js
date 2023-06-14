import { create } from "apisauce";

const apiClient = create({
	baseURL: "http://localhost:8080/api/",
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});

export default apiClient;
