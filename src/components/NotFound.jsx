// import React from 'react';

// const NotFound = () => (
//   <div className="p-4 text-center">
//     <h1 className="text-4xl font-bold">404</h1>
//     <p className="text-lg">Page not found</p>
//   </div>
// );

// export default NotFound;


import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sky-400 mb-4">404</h1>
        <p className="text-gray-700 text-lg mb-6">The page you are looking for cannot be found.</p>
        <a
          href="/"
          className="bg-sky-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
