import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AuthCard from "../components/AuthCard";
import GoogleSignInButton from "../components/GoogleSignInButton";
import PrimaryButton from "../../../shared/components/buttons/PrimaryButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};

    if (!email) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Login success:", { email, password });
  };

  return (
    <AuthCard
      title="Log into your account"
      subtitle="Welcome back. Let's continue creating."
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            placeholder="Enter your email"
            className={`w-full rounded-md border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#9B21FE]"
            }`}
          />
          {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-2">
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <Link
              to="/auth/forgot-password"
              className="text-xs text-gray-500 hover:text-[#9B21FE]"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              placeholder="Enter password"
              className={`w-full rounded-md border px-4 py-3 pr-12 text-sm transition focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#9B21FE]"
              }`}
            />

            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle password visibility"
            >
              {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="mt-6">
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </div>
      </form>

      <GoogleSignInButton />

      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link to="/auth" className="font-medium text-[#9B21FE] hover:underline">
          Sign up
        </Link>
      </p>
    </AuthCard>
  );
}
