import { lazy } from "react";
import { Route } from "react-router-dom";

const LandingPage = lazy(() => import("../../pages/landing-pages/LandingPage1"));
const LandingPage2 = lazy(() => import("../../pages/landing-pages/LandingPage2"));
const CustomerSignUp = lazy(() => import("../../pages/signups/CustomerSignUp"));
const FundiSignUp = lazy(() => import("../../pages/signups/FundiSignUp"));
const Professional = lazy(() => import("../../pages/signups/Professional"));
const ContractorSignup = lazy(() => import("../../pages/signups/ContractorSignUp"));
const HardwareSignUp = lazy(() => import("../../pages/signups/HardwareSignUp"));
const LoginScreen = lazy(() => import("../../pages/signups/Login"));
const ResetPassword = lazy(() => import("../../pages/signups/ResetPassword"));
const ResetToken = lazy(() => import("../../pages/signups/ResetToken"));

const signupsRoutes = [
  <Route path="/" element={<LandingPage />} key="landing-page_1" />,
  <Route path="/landing-page-2" element={<LandingPage2 />} key="landing-page_2" />,
  <Route path="/customer-signup" element={<CustomerSignUp />} key="customersignup"/>,
  <Route path="/fundi-signup" element={<FundiSignUp />} key="fundisignup"/>,
  <Route path="/professional-signup" element={<Professional />} key="professionalsignup"/>,
  <Route path="/contractor-signup" element={<ContractorSignup/>}  key="contractorsignup"/>,
  <Route path="/hardware-signup" element={<HardwareSignUp />}  key="hardwaresignup"/>,
  <Route path="/login" element={<LoginScreen />} key="loginscreen"/>,
  <Route path="/forgot-password" element={<ResetPassword />} key="reset-password" />,
  <Route path="/reset-password" element={<ResetToken />} key="reset-token" />
];

export default signupsRoutes;