import { useNavigate } from "react-router-dom";

const PrimaryButton = ({
  children,
  to,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
  className = "",
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (disabled || loading) return;

    if (onClick) onClick(e);

    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
    w-full py-2.5 rounded-md text-sm font-medium text-white
    bg-[#9B21FE]
    hover:bg-gradient-to-r hover:from-[#9B21FE] hover:to-purple-700
    transition-all duration-300
    disabled:opacity-60 disabled:cursor-not-allowed
    ${className}
  `}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default PrimaryButton;
