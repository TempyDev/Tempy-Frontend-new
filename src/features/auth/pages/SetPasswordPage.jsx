import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import AuthCard from "../components/AuthCard";
import GoogleSignInButton from "../components/GoogleSignInButton";
import PrimaryButton from "../../../shared/components/buttons/PrimaryButton";
import authService from "../../../services/authService";

export default function SetPasswordPage() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { signup_id, otp, email, fullName } = location.state || {};

  // Redirect if no state is passed
  if (!signup_id || !otp) {
    return (
      <AuthCard title="Error">
        <p className="text-center text-red-500">Invalid request. Please start signup again.</p>
        <Link to="/auth" className="mt-4 block text-center text-purple-600">
          Go back to signup
        </Link>
      </AuthCard>
    );
  }

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validatePassword(password);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      await authService.verifySignup(signup_id, otp, password, fullName, email);
      // Success - redirect to home or login
      navigate("/");
    } catch (err) {
      setError(err.message || "Failed to complete signup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Set your password"
      subtitle="Create a password to secure your Tempy account."
    >
      <form onSubmit={handleSubmit} noValidate>
        {error && (
          <div className="mb-4 rounded-md border border-red-300 bg-red-50 p-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              placeholder="Enter password"
              disabled={loading}
              className={`w-full rounded-md border px-4 py-3 pr-12 text-sm transition focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#9B21FE]"
              } ${loading ? "opacity-50" : ""}`}
            />

            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Toggle password visibility"
              disabled={loading}
            >
              {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
        </div>

        <PrimaryButton type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </PrimaryButton>
      </form>

      <GoogleSignInButton />

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="font-medium text-[#9B21FE] hover:underline">
          Log in
        </Link>
      </p>
    </AuthCard>
  );
}
