import Navbar from "./components/navbar.jsx";
import AppRoutes from "./routes/routes.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-gradient-to-b from-[#F9DFDF] to-[#FAF7F3] py-20">
        <AppRoutes />
      </main>
    </div>
  )
}
