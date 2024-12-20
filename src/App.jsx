// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
// import ProductDetail from "./components/ProductDetail"; // Import ProductDetail component
// import NotFound from "./components/NotFound";

// const App = () => (
//   <Router>
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/products/:id" element={<ProductDetail />} /> {/* Add route for product details */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
