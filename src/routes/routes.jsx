import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home";
import ResumeBuilder from "../pages/resumeBuilder/ResumeBuilder";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
    </Routes>
  )
}
