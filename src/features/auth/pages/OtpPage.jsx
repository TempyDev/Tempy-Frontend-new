import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import GoogleSignInButton from "../components/GoogleSignInButton";
import PrimaryButton from "../../../shared/components/buttons/PrimaryButton";

const OTP_LENGTH = 6;

export default function OtpPage() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { signup_id, email, fullName } = location.state || {};

  // Redirect if no state is passed
  if (!signup_id) {
    return (
      <AuthCard title="Error">
        <p className="text-center text-red-500">Invalid request. Please start signup again.</p>
        <Link to="/auth" className="mt-4 block text-center text-purple-600">
          Go back to signup
        </Link>
      </AuthCard>
    );
  }

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== OTP_LENGTH) {
      setError("Please enter complete OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      navigate("/auth/password", {
        state: {
          signup_id,
          otp: otpCode,
          email,
          fullName,
        },
      });
    } catch (err) {
      setError(err.message || "Failed to verify OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Check your email">
      <p className="mb-6 mt-1 text-center text-sm">
        Enter the 6-digit code sent to
        <span className="font-medium"> {email}</span>
      </p>

      {error && (
        <div className="mb-4 rounded-md border border-red-300 bg-red-50 p-3">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <p className="mb-6 mt-1 text-sm">Enter OTP</p>

      <div className="mb-6 flex justify-between gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            ref={(element) => {
              inputsRef.current[index] = element;
            }}
            onChange={(event) => handleChange(event.target.value, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            disabled={loading}
            className={`h-12 w-12 rounded-md border border-gray-300 text-center text-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#9B21FE] ${
              loading ? "opacity-50" : ""
            }`}
          />
        ))}
      </div>

      <PrimaryButton onClick={handleSubmit} disabled={loading}>
        {loading ? "Verifying..." : "Verify OTP"}
      </PrimaryButton>

      <p className="my-4 text-center text-sm">
        <button className="font-medium text-[#9B21FE] underline">Resend Code</button>
      </p>

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
