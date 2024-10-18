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
          <Route path="/vehicle/:id" element={<Vehicle />} />
        </Routes>
      </div>
    </div>
  );
}


// import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/common/Navbar";
// import Showroom from "./pages/Showroom";
// import Vehicle from "./pages/Vehicle";

// export default function App() {
//   useEffect(() => {
//     // Set background color for the entire page
//     document.body.style.backgroundColor = "#F4EBD0"; // Light gray example

//     // Cleanup on unmount to avoid conflicts
//     return () => {
//       document.body.style.backgroundColor = "";
//     };
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/showroom" element={<Showroom />} />
//           <Route path="/vehicle" element={<Vehicle />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
