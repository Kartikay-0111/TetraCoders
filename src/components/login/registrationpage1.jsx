// src/App.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Studentregistration() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className="App bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username or Email: 
            </label>
            <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password: 
            </label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-600">
              Date of Birth:
            </label>
            <input
              type="date"  // Change the type to "date" for a date input
              id="dob"
              className="mt-1 mb-6 p-2 pb-2 w-full border rounded"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-600">
              Gender:
            </label>
            <select
             id="gender" className="mt-1 mb-6 p-2 w-full border rounded">
             <option value="male"> Male</option>
             <option value="female"> Female</option>
             <option value="third"> Third gender</option>
            </select>
          

            
          </div>
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-600">
              College: 
            </label>
            <input 
              type="text" id="college" className="mt-1 p-2 mb-6 w-full border rounded"
            />
          </div>
          <button type="submit"  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-300" >
            Save and Next 
          </button>

          

        </form>
      </div>
    </div>

  );
}

export default Studentregistration;
