import Navbar from "./components/navbar.jsx";
import AppRoutes from "./routes/routes.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-gradient-to-b from-[#f9dfdf] via-[#fbefef] to-[#fcf8f8] py-20">
        <AppRoutes />
      </main>
    </div>
  )
}
