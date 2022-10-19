import React from "react";
import HomePageCards from "./HomePageCards"
import { NavLink } from 'react-router-dom';


function HomePage() {
    const cardTitles = ["Get More Visibility", "Organize Your Candidates", "Verify Their Abilities"];

  return (
    <>
      <div className="mt-6 flex justify-around items-center">
        <div class="flex flex-col">
          <div className="text-5xl text-white font-bold">
            Welcome to <br /> My<span className="text-blue-500">Jobs</span>
          </div>
          <div>
            <NavLink to="/login">
            <button className="mt-6 bg-blue-400 p-4 rounded-md text-white">
              Get Started
            </button>
            </NavLink>
          </div>
        </div>
        <img
          className="mt-5 w-2/5 rounded-md shadow-lg"
          src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="mt-10 grid grid-cols-3 gap-4">
       {
        cardTitles.map((title, index)=> { return <HomePageCards key={index} title={title}/>})
       }
      </div>
    </>
  );
}

export default HomePage;
