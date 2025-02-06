import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4 text-gray-700">Oops! Page Not Found</p>
        <p className="mt-2 text-lg text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
