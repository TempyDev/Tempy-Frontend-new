import { Outlet } from "react-router-dom";
import Footer from "../shared/components/footer/Footer";
import Navbar from "../shared/components/navigation/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="z-10 min-h-screen bg-fixed bg-[linear-gradient(179.98deg,_#F9DFDF_2.05%,_#FAF7F3_22.52%)] py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
