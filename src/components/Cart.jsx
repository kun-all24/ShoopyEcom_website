// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../redux/cartSlice';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cartItems.map((item) => (
//             <li key={item.id} className="flex justify-between items-center border-b pb-2">
//               <span>{item.title}</span>
//               <button
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//                 onClick={() => dispatch(removeFromCart(item.id))}
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.title}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
