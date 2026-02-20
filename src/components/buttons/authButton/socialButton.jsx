import React from "react";

const SocialButton = ({
  icon,
  children,
  onClick,
  className = "",
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        w-full flex items-center justify-center gap-2 my-4
        bg-gray-50 border border-gray-300
        rounded-md py-3 text-sm font-medium
        hover:bg-gray-100
        transition-all duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default SocialButton;