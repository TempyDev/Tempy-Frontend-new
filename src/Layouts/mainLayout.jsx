import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-fixed bg-[linear-gradient(179.98deg,_#F9DFDF_2.05%,_#FAF7F3_22.52%)] z-10 py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
