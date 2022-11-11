import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const islogged = localStorage.getItem("token") ? true : false;
  return (
    <div className="navbar">
      {!islogged ? (
        <button onClick={() => navigate("/signin")}>Sign In</button>
      ) :
      (
        <button onClick={() => localStorage.clear()}>Sign Off</button>
      ) 
      }
    </div>
  );
}

export default Navbar;
