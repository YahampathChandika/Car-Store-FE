import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Showroom from "./pages/Showroom";
import Vehicle from "./pages/Vehicle";

export default function App() {
  return (
    <div>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/vehicle" element={<Vehicle />} />
        </Routes>
      </div>
    </div>
  );
}
