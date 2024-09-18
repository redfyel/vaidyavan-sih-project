import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Register.css';

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Error state
  let [err, setErr] = useState("");
  // Navigate to routes
  let navigate = useNavigate();

  async function onUserRegister(newUser) {
    console.log(newUser);
    try {
      let res = await fetch("http://localhost:4000/user-api/user", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      let data = await res.json();
      console.log(data);
      if (data.message === "user created") {
        navigate("/login");
      } else {
        setErr(data.message); // Non-error messages
      }
    } catch (err) {
      console.log("error is ", err);
      setErr(err.message); // Error message
    }
  }

  return (
    <div className="register-container">
      <p className="register-header">User Registration</p>
      {/* Registration form */}
      <div className="register-form-container">
        {/* Error message */}
        {err.length !== 0 && <p className="error-message">{err}</p>}
        <form
          className="register-form"
          onSubmit={handleSubmit(onUserRegister)}
        >
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username", { required: true, minLength: 4 })}
            />
            {/* Validation error message */}
            {errors.username?.type === "required" && (
              <p className="validation-error">*This field is required</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="validation-error">
                *Username must be at least 4 characters long
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="validation-error">*This field is required</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="validation-error">*This field is required</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phn" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              id="phn"
              className="form-control"
              {...register("phn", { required: true })}
            />
            {errors.phn?.type === "required" && (
              <p className="validation-error">*This field is required</p>
            )}
          </div>

          {/* Profile Image URL */}
          <div className="form-group">
            <label htmlFor="propic" className="form-label">
              URL to Profile Image
            </label>
            <input
              type="url"
              id="propic"
              className="form-control"
              {...register("propic", { required: true })}
            />
            {errors.propic?.type === "required" && (
              <p className="validation-error">*This field is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
