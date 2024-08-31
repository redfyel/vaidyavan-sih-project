import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Register.css'
import Chatbot from "../home/ChatBot";

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [err, setErr] = useState("");
  let navigate = useNavigate();

  async function onUserRegister(newUser) {
    try {
      let res = await fetch("http://localhost:4000/user-api/user", { 
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      let data = await res.json();
      if (data.message === "user created") {
        navigate("/login");
      } else {
        setErr(data.message);
      }
    } catch (err) {
      setErr(err.message);
    }
  }

  return (
    <div className="register-container">
      <p className="form-title">User Registration</p>
      <div className="form-wrapper">
        {err.length !== 0 && <p className="error-message">{err}</p>}
        <form className="register-form" onSubmit={handleSubmit(onUserRegister)}>
          {/* username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username", { required: true, minLength: 4 })}
            />
            {errors.username?.type === "required" && (
              <p className="error-text">*This field is required</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="error-text">*Username must be at least 4 characters long</p>
            )}
          </div>

          {/* password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="error-text">*This field is required</p>
            )}
          </div>

          {/* email */}
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="error-text">*This field is required</p>
            )}
          </div>

          {/* Mobile no */}
          <div className="form-group">
            <label htmlFor="phn">Phone Number</label>
            <input
              type="text"
              id="phn"
              className="form-control"
              {...register("phn", { required: true })}
            />
            {errors.phn?.type === "required" && (
              <p className="error-text">*This field is required</p>
            )}
          </div>

          {/* Profile image */}
          <div className="form-group">
            <label htmlFor="propic">URL to Profile Image</label>
            <input
              type="url"
              id="propic"
              className="form-control"
              {...register("propic", { required: true })}
            />
            {errors.propic?.type === "required" && (
              <p className="error-text">*This field is required</p>
            )}
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="submit-button"
          >
            Register
          </button>
        </form>
      </div>
      <Chatbot />
    </div>
  );
}

export default Register;
