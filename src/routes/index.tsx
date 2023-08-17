import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from "../pages/welcome/welcome";
import { PlatformLink } from "../pages/platform-link/platform-link";

export function Paths() {
  const PrivateRouter = ({ children, redirectTo }: any) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  const PrivateRouterSignIn = ({ children, redirectTo }: any) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/platform-link" element={<PlatformLink />} />
      </Routes>
    </BrowserRouter>
  );
}
