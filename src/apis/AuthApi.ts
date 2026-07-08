import axios from "axios";
import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import axiosInstance from "./AxiosConfig";

export const registerUser = async (data: RegisterRequest) => {
    return await axiosInstance.post("/customers/signup", data);
};
export const loginUser = (data: LoginRequest) => {
    return axios.post(
        "http://localhost:8080/api/customers/login",
        data
    );
};