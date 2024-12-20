// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';

// const ProductItem = ({ product }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="border p-4 rounded shadow-md">
//       <h2 className="text-lg font-bold">{product.title}</h2>
//       <p>{product.description}</p>
//       <p className="text-green-500 font-semibold">${product.price}</p>
//       <button
//         className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
//         onClick={() => dispatch(addToCart(product))}
//       >
//         Add to Cart
//       </button>
//       <Link to={`/products/${product.id}`} className="text-blue-500 ml-2 hover:underline">
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductItem;


import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="text-green-500">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
