import Navbar from "./components/navbar.jsx";
import AppRoutes from "./routes/routes.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <AppRoutes />
      </main>
    </div>
  )
}
