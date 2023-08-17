import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/welcome/welcome";
import { PlatformLink } from "../pages/platform-link/platform-link";
import { CreateCompany } from "../pages/create-company/create-company";
import { Finish } from "../pages/finish/finish";

export function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateCompany />} />
        <Route path="/link-google" element={<Welcome />} />
        <Route path="/platform-link" element={<PlatformLink />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}
