import { Outlet } from "react-router-dom";
import Logo from "../assets/images/logo/logo.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(179.98deg,_#F9DFDF_2.05%,_#FAF7F3_22.52%)] px-4">
      
      {/* Logo */}
      <img src={Logo} alt="Tempy Logo" className="h-10 mb-2" />
      <p className="text-sm mb-6">
        Create. Preview. Download.
      </p>

      {/* Card Area */}
      <div className="w-full max-w-md">
        <Outlet />
      </div>

      {/* Footer */}
      <p className="text-xs mt-10">
        © 2026 Tempy. All rights reserved.
      </p>
    </div>
  );
};

export default AuthLayout;