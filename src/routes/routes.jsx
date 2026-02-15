import { Routes, Route } from "react-router-dom"
import HomeMain from "../pages/Home/home_main";
import ResumeBuilder from "../pages/resumeBuilder/ResumeBuilder";
import ResumeTemplates  from "../pages/resumeBuilder/ResumeTemplate";
import ResumeReviewFinalScreen from "../pages/resumeBuilder/FinalReview"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeMain />} />
      <Route path="/resume-builder" element={<ResumeBuilder />} />
      <Route path="/resume-templates" element={<ResumeTemplates/>} />
      <Route path="/final-review" element={<ResumeReviewFinalScreen/>} />
    </Routes>
  )
}
