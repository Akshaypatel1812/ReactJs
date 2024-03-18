import React from 'react'
import { NavLink } from 'react-router-dom'

const UserId = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md m-0">
        <h1 className="text-3xl font-semibold mb-4">Username and ID</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-gray-700 font-semibold mb-2"
          >
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            placeholder="Enter your user ID"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <NavLink to="/Home" >
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Submit
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default UserId