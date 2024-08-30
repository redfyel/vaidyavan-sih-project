import  {UserLoginContext} from "../../contexts/UserLoginContext";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
  let { loginUser, userLoginStatus,err } = useContext(UserLoginContext);
  let {register, handleSubmit, formState: { errors }} = useForm();
  let navigate = useNavigate();

  function userLogin(userCred) {
    loginUser(userCred);
    console.log(userLoginStatus);
  }

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate("/user-profile");
    }
  }, [userLoginStatus]);

  return (
    <div className="w-50 mx-auto">
      <p className="display-3 text-center mt-4 lead">Login</p>
      <div className="row light-green-bg">
        <div className="col-11 col-sm-10 col-md-6 mx-auto w-75">
          <form className=" mt-5 p-3 " onSubmit={handleSubmit(userLogin)}>

            {/* other error messages */}
            {
              err.length!==0 && <p className="fs-3 text-danger">{err}</p>
            }
            <div className="mb-3">
              <label htmlFor="username" className="form-label fs-4">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                {...register("username", { required: true })}
              />
              {errors.username?.type === "required" && (
                <p className="lead text-danger">*This field is required</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-4">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p className="lead text-danger">*This field is required</p>
              )}
            </div>
            <button type="submit" className="btn login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
