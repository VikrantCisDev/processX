import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import SignIn from "./pages/sign-in/SignIn.jsx";
import CreateCompany from "./pages/create-company/CreateCompany.jsx";
import ForgotPassword from "./pages/forgot-password/ForgotPassword.jsx";
import CreateAccount from "./pages/create-account/CreateAccount.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import DashboardUpdated from "./pages/dashboard-updated/DashboardUpdated.jsx";
import ImpactAnalysis from "./pages/impact-analysis/ImpactAnalysis.jsx";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/create-company" element={<CreateCompany />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/sign-up" element={<CreateAccount />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard-updated" element={<DashboardUpdated />} />
      <Route path="/impact-analysis" element={<ImpactAnalysis />} />



      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
