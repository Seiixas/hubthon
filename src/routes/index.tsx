import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/welcome/welcome";
import { PlatformLink } from "../pages/platform-link/platform-link";
import { CreateCompany } from "../pages/create-company/create-company";
import { Finish } from "../pages/finish/finish";
import { MyLocations } from "../pages/my-locations/my-locations";
import { Login } from "../pages/login/Login";

export function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CreateCompany />} />
        <Route path="/link-google" element={<Welcome />} />
        <Route path="/platform-link" element={<PlatformLink />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/my-locations" element={<MyLocations />} />
      </Routes>
    </BrowserRouter>
  );
}
