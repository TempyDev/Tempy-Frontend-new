import Navbar from "./components/navbar.jsx";
import AppRoutes from "./routes/routes.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <main >
        <AppRoutes />
      </main>
    </div>
  )
}
