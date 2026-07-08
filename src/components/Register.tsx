import React from "react";
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
