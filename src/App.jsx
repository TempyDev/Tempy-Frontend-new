import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import AppRoutes from "./routes/routes.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-fixed bg-[linear-gradient(179.98deg,_#F9DFDF_2.05%,_#FAF7F3_22.52%)] z-10 py-20">
        <AppRoutes />
      </main>
      <Footer/>
    </div>
  )
}
