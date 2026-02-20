import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/buttons/authButton/primaryButton";
import SocialButton from "../../components/buttons/authButton/socialButton";
import { Eye, EyeOff } from "lucide-react";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    console.log("Password set:", password);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-9">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Set your password
      </h2>
      <p className="text-sm text-gray-500 text-center mt-2 mb-8">
        Create a password to secure your Tempy account
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Password Field */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter password"
              className={`w-full px-4 py-3 pr-12 border rounded-md text-sm 
              focus:outline-none focus:ring-2 transition
              ${
                error
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#9B21FE]"
              }`}
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {show ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
        </div>

        {/* Button */}
        <PrimaryButton type="submit">Sign up</PrimaryButton>
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

      {/* Login */}
      <p className="text-sm text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-[#9B21FE] font-medium hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SetPassword;
