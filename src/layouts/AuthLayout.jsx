import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(179.98deg,_#F9DFDF_2.05%,_#FAF7F3_22.52%)] px-4">
      <img src={logo} alt="Tempy logo" className="mb-2 h-10" />
      <p className="mb-6 text-sm">Create. Preview. Download.</p>

      <div className="w-full max-w-md">
        <Outlet />
      </div>

      <p className="mt-10 text-xs">(c) 2026 Tempy. All rights reserved.</p>
    </div>
  );
}
