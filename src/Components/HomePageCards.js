import React from 'react'

function HomePageCards({ title }) {
  return (
    <div class="flex justify-center">
    <div class="block p-6 rounded-md shadow-lg bg-white max-w-sm">
      <h5 class="text-blue-600 text-xl leading-tight font-medium mb-2">
       { title }
      </h5>
      <p class="text-gray-700 text-base mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ad eum magni in quam omnis fugiat
      </p>
    </div>
  </div>
  )
}

export default HomePageCards