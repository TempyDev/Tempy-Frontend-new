import React, { useRef, useState } from "react";
import PrimaryButton from "../../components/buttons/authButton/primaryButton";
import SocialButton from "../../components/buttons/authButton/socialButton";
import { Link } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");
    console.log("OTP:", finalOtp);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-9">
      {/* Title */}
      <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">
        Check your email
      </h2>
      <p className="text-sm text-center mt-1 mb-6">
        Enter the 6-digit code sent to
        <span className="font-medium "> yourmail@example.com</span>
      </p>
      <p className="text-sm mt-1 mb-6">
        Enter OTP
      </p>
      {/* OTP Inputs */}
      <div className="flex justify-between mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B21FE] transition"
          />
        ))}
      </div>

      {/* Button */}
      <PrimaryButton onClick={handleSubmit} to="/auth/password">Verify OTP</PrimaryButton>

      {/* Resend */}
      <p className="text-sm text-center my-4">
        <button className="text-[#9B21FE] font-medium underline">
          Resend Code
        </button>
      </p>

      
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

export default Otp;
