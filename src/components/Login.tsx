import { useForm } from "react-hook-form";
import type { LoginRequest } from "../interfaces/LoginRequest";
import { serviceLogin } from "../services/LoginService";

function Login() {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<LoginRequest>();

    const onSubmit = async (data: LoginRequest) => {

        try {

            const response = await serviceLogin(data);
            localStorage.setItem("token", response.token);

            console.log(response);

            alert("Login Successful");

            reset();

        } catch (error) {

            alert("Invalid Email or Password");

            console.log(error);
        }

    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <input
                type="email"
                placeholder="Email"
                {...register("email")}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                {...register("password")}
            />

            <br /><br />

            <button type="submit">
                Login
            </button>

        </form>

    );
}

export default Login;