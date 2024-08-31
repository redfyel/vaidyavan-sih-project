import { UserLoginContext } from "../../contexts/UserLoginContext";
import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import Chatbot from "../home/ChatBot";

function Login() {
  const { loginUser, userLoginStatus, err } = useContext(UserLoginContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const userLogin = (userCred) => {
    loginUser(userCred);
  };

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate("/user-profile");
    }
  }, [userLoginStatus]);

  return (
    <div className="login-container">
      <p className="login-title">Login</p>
      <div className="login-form-wrapper">
        {err.length !== 0 && <p className="error-message">{err}</p>}
        <form className="login-form" onSubmit={handleSubmit(userLogin)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username", { required: true })}
            />
            {errors.username?.type === "required" && (
              <p className="error-text">*This field is required</p>
            )}
          </div>

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

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      <Chatbot />
    </div>
  );
}

export default Login;
