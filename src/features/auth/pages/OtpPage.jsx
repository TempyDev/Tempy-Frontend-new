import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import GoogleSignInButton from "../components/GoogleSignInButton";
import PrimaryButton from "../../../shared/components/buttons/PrimaryButton";

const OTP_LENGTH = 6;

export default function OtpPage() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef([]);

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

  const handleSubmit = () => {
    console.log("OTP:", otp.join(""));
  };

  return (
    <AuthCard title="Check your email">
      <p className="mb-6 mt-1 text-center text-sm">
        Enter the 6-digit code sent to
        <span className="font-medium"> yourmail@example.com</span>
      </p>
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
            className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#9B21FE]"
          />
        ))}
      </div>

      <PrimaryButton onClick={handleSubmit} to="/auth/password">
        Verify OTP
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
