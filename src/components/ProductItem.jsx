// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";

// const ProductItem = ({ product }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="bg-white border p-4 rounded shadow-md hover:shadow-lg transition">
//       <img
//         src={product.thumbnail} // Ensure this matches the API field for the image
//         alt={product.title}
//         className="w-full h-48 object-cover rounded mb-4"
//       />
//       <h2 className="font-bold text-lg mb-2">{product.title}</h2>
//       <p className="text-gray-600 text-sm mb-4">${product.price}</p>
//       <div className="flex justify-between items-center">
//         <button
//           className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
//           onClick={() => dispatch(addToCart(product))}
//         >
//           Add to Cart
//         </button>
//         <Link
//           to={`/products/${product.id}`} // Link to the product detail page
//           className="text-blue-500 hover:underline text-sm"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;


import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 mt-2 hover:bg-slate-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="font-bold text-lg text-gray-800 mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-4 truncate">{product.description}</p>
      <p className="text-sky-600 font-semibold mb-4">${product.price.toFixed(2)}</p>
      <div className="flex justify-between items-center">
        <button
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-slate-600 transition"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
        <Link
          to={`/products/${product.id}`}
          className="text-blue-500 hover:underline hover:text-gray-600 text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
