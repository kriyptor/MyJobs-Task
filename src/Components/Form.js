import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ setUseAuth }) {
    const [emailAuth, setEmailAuth] = useState("");
    const [passAuth, setPassAuth] = useState("");
    const navigate = useNavigate()
    
    const userLogin = () => {
        if(emailAuth.match(/^(squareboat@gmail.com|sb@gmail.com)$/) && passAuth === "squareboat"){
            setUseAuth(true);
            navigate("/jobs")
        }
        else{ 
            alert("Kindly Enter Valid Credentials!")
        }

    }
    
    return (
    <div className="bg-white w-1/2 mx-auto mt-5 shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <p className="text-xl mb-2">Login</p>
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="Email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmailAuth(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassAuth(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={() => userLogin()}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Form;
