// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductItem from './ProductItem';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState('');
//   const [sortBy, setSortBy] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://dummyjson.com/products');
//         setProducts(response.data.products);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleSort = (criteria) => {
//     setSortBy(criteria);
//     const sortedProducts = [...products].sort((a, b) => {
//       if (criteria === 'price') return a.price - b.price;
//       if (criteria === 'title') return a.title.localeCompare(b.title);
//       return 0;
//     });
//     setProducts(sortedProducts);
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="p-2 border rounded w-full md:w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           className="ml-4 p-2 border rounded"
//           value={sortBy}
//           onChange={(e) => handleSort(e.target.value)}
//         >
//           <option value="">Sort By</option>
//           <option value="price">Price</option>
//           <option value="title">Title</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filteredProducts.map((product) => (
//           <ProductItem key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const handleSort = (criteria) => {
    const sorted = [...products].sort((a, b) => {
      if (criteria === "price") return a.price - b.price;
      if (criteria === "title") return a.title.localeCompare(b.title);
      return 0;
    });
    setProducts(sorted);
    setSortBy(criteria);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
