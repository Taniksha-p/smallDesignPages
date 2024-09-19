import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const handleGoogleSignIn = () => {
    // This will redirect the user to the backend's Google OAuth login endpoint
    window.location.href = 'http://your-backend-url.com/api/v1/auth/google';
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 shadow-2">Sign in to your Account</h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
        >
          <FcGoogle className="mr-3 text-2xl" />
          Sign in with Google
        </button>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
