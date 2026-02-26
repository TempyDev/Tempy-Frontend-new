import { useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import GoogleSignInButton from "../components/GoogleSignInButton";
import PrimaryButton from "../../../shared/components/buttons/PrimaryButton";

export default function CreateAccountPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form Submitted", form);
    }
  };

  return (
    <AuthCard
      title="Create your account"
      subtitle="Save your work and access it anytime."
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            type="text"
            value={form.fullName}
            placeholder="Enter full name"
            onChange={(event) =>
              setForm((prev) => ({ ...prev, fullName: event.target.value }))
            }
            className={`w-full rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-500"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            placeholder="Enter your email"
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className={`w-full rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-purple-500"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <PrimaryButton to="/auth/verify">Continue</PrimaryButton>
      </form>

      <p className="mt-2 text-center text-xs italic text-gray-500">
        *We&apos;ll email you a verification code only.
      </p>

      <GoogleSignInButton />

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="font-medium text-purple-600 hover:underline">
          Log in
        </Link>
      </p>
    </AuthCard>
  );
}
