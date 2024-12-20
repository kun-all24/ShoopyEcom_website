// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';

// const ProductList = lazy(() => import('./components/ProductList'));
// const ProductDetail = lazy(() => import('./components/ProductDetail'));
// const Cart = lazy(() => import('./components/Cart'));
// const NotFound = lazy(() => import('./components/NotFound'));

// const App = () => (
//   <Router>
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </div>
//   </Router>
// );

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
