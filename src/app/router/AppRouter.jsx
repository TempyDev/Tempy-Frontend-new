import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const MainLayout = lazy(() => import("../../layouts/MainLayout"));
const AuthLayout = lazy(() => import("../../layouts/AuthLayout"));

const HomePage = lazy(() => import("../../features/home/pages/HomePage"));

const CreateAccountPage = lazy(
  () => import("../../features/auth/pages/CreateAccountPage"),
);
const OtpPage = lazy(() => import("../../features/auth/pages/OtpPage"));
const SetPasswordPage = lazy(
  () => import("../../features/auth/pages/SetPasswordPage"),
);
const LoginPage = lazy(() => import("../../features/auth/pages/LoginPage"));

const ResumeBuilderPage = lazy(
  () => import("../../features/resume-builder/pages/ResumeBuilderPage"),
);
const ResumeTemplatesPage = lazy(
  () => import("../../features/resume-builder/pages/ResumeTemplatesPage"),
);
const FinalReviewPage = lazy(
  () => import("../../features/resume-builder/pages/FinalReviewPage"),
);

function RouterFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center text-sm text-slate-600">
      Loading...
    </div>
  );
}

export default function AppRouter() {
  return (
    <Suspense fallback={<RouterFallback />}>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<CreateAccountPage />} />
          <Route path="verify" element={<OtpPage />} />
          <Route path="password" element={<SetPasswordPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="resume-builder" element={<ResumeBuilderPage />} />
          <Route path="resume-templates" element={<ResumeTemplatesPage />} />
          <Route path="final-review" element={<FinalReviewPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
