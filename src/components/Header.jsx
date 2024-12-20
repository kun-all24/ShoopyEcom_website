// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
//   <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
//     <h1 className="text-2xl font-bold">ShoppyGlobe</h1>
//     <nav>
//       <Link to="/" className="mr-4 hover:underline">Home</Link>
//       <Link to="/cart" className="hover:underline">Cart</Link>
//     </nav>
//   </header>
// );

// export default Header;



import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-500 text-white p-4 flex justify-between">
    <h1 className="text-2xl font-bold">ShoppyGlobe</h1>
    <nav>
      <Link to="/" className="mr-4 hover:underline">Home</Link>
      <Link to="/cart" className="hover:underline">Cart</Link>
    </nav>
  </header>
);

export default Header;
