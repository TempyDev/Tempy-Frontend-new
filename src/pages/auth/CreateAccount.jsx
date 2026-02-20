import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/buttons/authButton/primaryButton";
import SocialButton from "../../components/buttons/authButton/socialButton";
const CreateAccount = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", form);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-9">
      <h2 className="text-lg font-semibold text-center text-gray-800">
        Create your account
      </h2>
      <p className="text-sm text-gray-500 text-center mt-1 mb-6">
        Save your work and access it anytime.
      </p>
      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            value={form.fullName}
            placeholder="Enter Full name"
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition ${
              errors.fullName
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-500"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="text"
            value={form.email}
            placeholder="Enter your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-500"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Button */}
        <PrimaryButton to="/auth/verify">Continue</PrimaryButton>
      </form>
      <p className="text-xs text-center mt-2 italic text-gray-500">
        *We’ll email you a verification code only.
      </p>
      {/* <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-3 text-xs text-gray-400">OR</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div> */}
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
      </SocialButton>{" "}
      <p className="text-sm text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-purple-600 font-medium hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default CreateAccount;
