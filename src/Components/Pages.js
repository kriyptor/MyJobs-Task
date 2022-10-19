import React from 'react'

function Pages() {
  return (
    <div className="w-1/6 mt-6 mx-auto flex justify-evenly items-center">
        <button className="p-1 border-2 border-blue-500 rounded-md">Prev</button>
        <p className="p-1 rounded-md bg-cyan-400 text-white">1</p>
        <button className="p-1 border-2 border-blue-500 rounded-md">Next</button>
    </div>
  )
}

export default Pages