import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home";
import ResumeBuilder from "../pages/resumeBuilder/ResumeBuilder";
import ResumeTemplates  from "../pages/resumeBuilder/ResumeTemplate";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/resume-templates" element={<ResumeTemplates/>} />
    </Routes>
  )
}
