import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SetPassword from "../pages/auth/SetPassword";

const HomeMain = lazy(() => import("../pages/Home/home_main"));
const ResumeBuilder = lazy(
  () => import("../pages/resumeBuilder/ResumeBuilder"),
);
const ResumeTemplates = lazy(
  () => import("../pages/resumeBuilder/ResumeTemplate"),
);
const ResumeReviewFinalScreen = lazy(
  () => import("../pages/resumeBuilder/FinalReview"),
);

const AuthLayout = lazy(() => import("../Layouts/authLayout"));
const CreateAccount = lazy(() => import("../pages/auth/CreateAccount"));
const VerifyEmail = lazy(() => import("../pages/auth/SetPassword"));
const Otp = lazy(() => import("../pages/auth/Otp"));
const Login = lazy(() => import("../pages/auth/Login"));

const MainLayout = lazy(() => import("../Layouts/mainLayout"));
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* AUTH ROUTES */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<CreateAccount />} />
          <Route path="verify" element={<Otp />} />
          <Route path="password" element={<SetPassword />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* MAIN WEBSITE ROUTES */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeMain />} />
          <Route path="resume-builder" element={<ResumeBuilder />} />
          <Route path="resume-templates" element={<ResumeTemplates />} />
          <Route path="final-review" element={<ResumeReviewFinalScreen />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
