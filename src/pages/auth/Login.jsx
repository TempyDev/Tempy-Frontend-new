import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import PrimaryButton from "../../components/buttons/authButton/primaryButton";
import SocialButton from "../../components/buttons/authButton/socialButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Login success:", { email, password });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-9">
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Log into your account
      </h2>
      <p className="text-sm text-gray-500 text-center mt-2 mb-8">
        Welcome back. Let’s continue creating
      </p>

      <form onSubmit={handleSubmit} noValidate>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 border rounded-md text-sm 
            focus:outline-none focus:ring-2 transition
            ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#9B21FE]"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-2">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-xs text-gray-500 hover:text-[#9B21FE]"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
              placeholder="Enter password"
              className={`w-full px-4 py-3 pr-12 border rounded-md text-sm 
              focus:outline-none focus:ring-2 transition
              ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#9B21FE]"
              }`}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {show ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-xs text-red-500 mt-2">
              {errors.password}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="mt-6">
          <PrimaryButton type="submit">
            Log in
          </PrimaryButton>
        </div>
      </form>

     

      {/* Google */}
      <SocialButton
        icon={
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
        }
      >
        Sign in with Google
      </SocialButton>

      {/* Signup */}
      <p className="text-sm text-center text-gray-600 mt-6">
        Don’t have an account?{" "}
        <Link
          to="/auth"
          className="text-[#9B21FE] font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;