import React, { useState } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [email, setEmail] = useState('virat@gmail.com');
  const [password, setPassword] = useState('virat@123');
  const [error, setError] = useState(''); // State to hold error message
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchangeHandler = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { email, password },
        { withCredentials: true }
      );

      if (res.data) {
        dispatch(addUser(res.data));
        navigate('/'); // Navigate after successful dispatch
      } else {
        setError('No data received from API.');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      console.error("Error during login:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4 py-10 sm:py-20">
      <form
        className="flex flex-col bg-gray-800 p-8 rounded-lg shadow-lg w-80"
        onSubmit={onchangeHandler}
      >
        <h2 className="text-white text-center text-2xl font-bold mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}

        <label className="text-gray-400 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your email"
        />

        <label className="text-gray-400 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-6 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
