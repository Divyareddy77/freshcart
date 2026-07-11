import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLeaf, FaLock, FaPhone, FaUser } from "react-icons/fa";

function Register() {

  let {register,handleSubmit,reset}  = useForm<RegisterRequest>();

let navigate = useNavigate();

    let onSubmitLogics = (data: RegisterRequest) => {

        console.log(data);

        // registerSevice(data);

      // Read existing users
      const users: RegisterRequest[] = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

    // Check duplicate email
  const userExists = users.some(
    (user) => user.email === data.email
  );

    if (userExists) {
    alert("Email already registered");
    return;
  }
    // Add id
  const newUser = { id: users.length + 1, ...data};

   // Add new user to array
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successfulll");
        navigate("/login");
        reset();
    }
  return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4">

    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-green-100 p-10">

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
          <FaLeaf className="text-white text-4xl" />
        </div>
      </div>

      <h1 className="text-4xl font-black text-center text-green-600">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Join FreshCart and start shopping fresh!
      </p>

      <form
        onSubmit={handleSubmit(onSubmitLogics)}
        className="space-y-5"
      >

        {/* Name */}
        <div>
          <label className="font-semibold text-gray-700">
            Full Name
          </label>

          <div className="mt-2 flex items-center border-2 border-gray-200 rounded-xl px-4 focus-within:border-green-500 transition">
            <FaUser className="text-gray-400" />

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 outline-none bg-transparent"
              {...register("name")}
            />
          </div>
        </div>

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
              {...register("email")}
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
              {...register("password")}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="font-semibold text-gray-700">
            Phone Number
          </label>

          <div className="mt-2 flex items-center border-2 border-gray-200 rounded-xl px-4 focus-within:border-green-500 transition">
            <FaPhone className="text-gray-400" />

            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full p-4 outline-none bg-transparent"
              {...register("phone")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="
          w-full
          bg-gradient-to-r
          from-green-500
          to-emerald-600
          hover:from-green-600
          hover:to-emerald-700
          text-white
          text-xl
          font-bold
          py-4
          rounded-xl
          shadow-lg
          hover:shadow-2xl
          hover:scale-105
          transition-all
          duration-300"
        >
          Create Account
        </button>

      </form>

      <p className="text-center mt-8 text-gray-600">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-green-600 font-bold hover:underline"
        >
          Login
        </a>
      </p>

    </div>

  </div>
);
}

export default Register

























/* import React from "react";
import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { registerUser } from "../apis/AuthApi";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

  const onSubmit = async (data: RegisterRequest) => {
    const response = await registerUser(data);

    alert("Registered successfully")
    console.log(response);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="text"
        {...register("name")}
        placeholder="Username"
      />

      <br /><br />

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />

      <input
        type="number"
        {...register("phone")}
        placeholder="Enter Phone Number"
      />

      <br /><br />

      <button type="submit">Register</button>

    </form>
  );
}

export default Register;
 */