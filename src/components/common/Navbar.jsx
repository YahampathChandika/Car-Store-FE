// import React from "react";
// import "../../assets/css/Navbar.css";
// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-content">
//         <ul className="navbar-links">
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/showroom">Showroom </a>
//           </li>
//           <li>
//             <a href="/contact">About</a>
//           </li>
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate("/", { state: { section } }); // Navigate to Home with section info
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/showroom">Showroom</a>
          </li>
          <li>
            <button className="nav-button" onClick={() => handleNavigation("about")}>
              About
            </button>
          </li>
          <li>
            <button className="nav-button" onClick={() => handleNavigation("contact")}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

