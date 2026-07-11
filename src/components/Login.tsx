import { useForm } from "react-hook-form";
import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { FaEnvelope, FaLeaf, FaLock } from "react-icons/fa";

function Login() {
  const {register,handleSubmit,
    reset,
  } = useForm<LoginRequest>();

  const onSubmitLogics = (data: LoginRequest) => {

    console.log(data);

    // Read all registered users from localStorage
    const users: RegisterRequest[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check whether user exists
    const user = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (user) {

      alert("Login Successful");

      // Store logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      reset();
        window.location.href = "/";
    } else {

      alert("Invalid Email or Password");

    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4">

    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-green-100">

      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
          <FaLeaf className="text-white text-4xl" />
        </div>
      </div>

      <h1 className="text-4xl font-black text-center text-green-600">
        Welcome Back
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Login to your FreshCart account
      </p>

      <form
        onSubmit={handleSubmit(onSubmitLogics)}
        className="space-y-6"
      >
        {/* Email */}
        <div>
          <label className="font-semibold text-gray-700">
            Email
          </label>

          <div className="mt-2 flex items-center border-2 border-gray-200 rounded-xl px-4 focus-within:border-green-500 transition">
            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 outline-none bg-transparent"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="font-semibold text-gray-700">
            Password
          </label>

          <div className="mt-2 flex items-center border-2 border-gray-200 rounded-xl px-4 focus-within:border-green-500 transition">
            <FaLock className="text-gray-400" />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 outline-none bg-transparent"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl font-bold
          py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Login
        </button>
      </form>

      <p className="text-center mt-8 text-gray-600">
        Don't have an account?{" "}
        <a
          href="/Register"
          className="text-green-600 font-bold hover:underline"
        >
          Register
        </a>
      </p>

    </div>

  </div>
);}

export default Login;






















/* import { useForm } from "react-hook-form";
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

export default Login; */