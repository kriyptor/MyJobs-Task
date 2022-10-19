import React from "react";

function ModalCards({ name, email, skills }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="block max-w-xs p-6 shadow-lg bg-white border-2 border-blue-800 rounded-md">
          <div className="flex items-center">
          <div class="m-1 mr-3 w-14 h-14 relative flex justify-center items-center rounded-full bg-blue-500 text-xl text-white uppercase">{name[0]}</div>
            <div>
            <h5 className="text-gray-900 text-md leading-tight font-medium mb-2">
              {name}
            </h5>
            <p className="font-light">{email}</p>
            </div>
          </div>
          <div className="my-4">
         <h5 className="font-bold">SKILLS</h5>
          <p className="text-gray-700 text-base">
           {skills}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCards;
