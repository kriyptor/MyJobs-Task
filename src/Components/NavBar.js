import React from "react";
import { useNavigate } from "react-router-dom";


function NavBar({ setLogOutBtn, useAuth }) {
    const navigate = useNavigate()
  return (
    <div className="bg-transparent flex justify-between items-center p-2 border-b-2 border-white">
      <button className="font-bold text-2xl" onClick={() => navigate("/")}>
        <span className="text-white">My</span>
        <span className="text-blue-600">Jobs</span>
      </button>
      {useAuth ? (
        <button
          class="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-blue-300 text-xl text-white uppercase"
          onClick={() => setLogOutBtn((prev) => !prev)}
        >
          R 
        </button>
      ) : (
        <button
          className="p-2 border-solid border-2 border-cyan-800 rounded-md w-32 bg-cyan-600 text-white"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default NavBar;
