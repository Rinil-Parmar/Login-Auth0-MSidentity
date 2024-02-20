import Home from "./Home";
import Profile from "./Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
