// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const cartCount = useSelector((state) => state.cart.length); // Get cart item count

//   return (
//     <header className="bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-10 shadow-md">
//       <h1 className="text-2xl font-bold">
//         <Link to="/">ShoppyGlobe</Link>
//       </h1>
//       <nav className="flex gap-4 items-center">
//         <Link to="/" className="hover:text-gray-200 transition">Home</Link>
//         <Link to="/cart" className="relative hover:text-gray-200 transition">
//           Cart
//           {cartCount > 0 && ( // Show badge only if there are items in the cart
//             <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <header className="bg-green-500 text-white p-4 flex justify-between items-center sticky top-0 w-full z-10 shadow-md">
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-200 transition">
          ShoppyGlobe
        </Link>
      </h1>
      <nav className="flex items-center gap-8">
        <Link to="/" className="hover:text-gray-300 text-lg transition">
          Home
        </Link>
        <Link to="/cart" className="relative hover:text-gray-300 text-lg transition">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
