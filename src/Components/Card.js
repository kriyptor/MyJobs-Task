import React from "react";

function Card({ setShowModal , title, location, description }) {
  return (
    <div className="bg-white mt-6 p-1 rounded-md overflow-hidden shadow-lg text-sm">
      <div className="p-3">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 overflow-auto">
         { description?.substring(0, 35) }
        </p>
      </div>
      <div className="flex justify-between items-center p-2">
        <p>📍{ location }</p>
        <button className="bg-blue-300 rounded-md p-2 w-1/2 text-xs" onClick={() => setShowModal(true)}>View Application</button>
      </div>
    </div>
  );
}

export default Card;
