import React from "react";
import { useNavigate } from "react-router-dom";


function LogoutBtn({ setUseAuth }) {
  const navigate = useNavigate()
  const logoutUser = () => {
    setUseAuth(false)
    navigate("/login")
  }
  return (
    <>
      <button
        className="absolute top-30 right-0 bg-white text-blue-800 z-100 font-bold p-4 rounded-md mt-1"
        onClick={() => logoutUser()}
      >
        Logout
      </button>
    </>
  );
}

export default LogoutBtn;
