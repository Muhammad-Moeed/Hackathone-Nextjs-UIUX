'use client';
import { client } from '../../sanity/lib/client';
import { featuredProducts, ourProducts, categories } from '../../sanity/lib/queries';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';  // Link component for navigation

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  imageUrl?: string;
  tags?: string[];
}

export default function Products() {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetching featured products
    client.fetch(featuredProducts).then((data) => {
      setFeatured(data);
    }).catch((error) => console.error("Error fetching featured products:", error));

    // Fetching all products
    client.fetch(ourProducts).then((data) => {
      setAllProducts(data);
    }).catch((error) => console.error("Error fetching all products:", error));

    // Fetching category products
    client.fetch(categories).then((data) => {
      setCategoryProducts(data);
    }).catch((error) => console.error("Error fetching category products:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product) => (
          <div key={product._id} className="p-4 rounded-lg shadow-lg flex flex-col items-center">
            {product.imageUrl && (
              <div className="flex justify-center w-full mb-2">
                <img src={product.imageUrl} alt={product.title} width={200} />
              </div>
            )}
            <h2 className="text-lg font-semibold text-center mb-2">{product.title}</h2>
            <p className="text-gray-500 text-center">Price: ${product.price}</p>
            {/* Link to product details page */}
            <Link href={`/pages/product/${product._id}`}>

              <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4 w-full">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mt-8 mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <div key={product._id} className="p-4 rounded-lg shadow-lg flex flex-col items-center">
            {product.imageUrl && (
              <div className="flex justify-center w-full mb-2">
                <img src={product.imageUrl} alt={product.title} width={200} />
              </div>
            )}
            <h2 className="text-lg font-semibold text-center mb-2">{product.title}</h2>
            <p className="text-gray-500 text-center">Price: ${product.price}</p>
            {/* Link to product details page */}
            <Link href={`/pages/product/${product._id}`}>
              <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4 w-full">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mt-8 mb-4">Category Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <div key={product._id} className="p-4 rounded-lg shadow-lg flex flex-col items-center">
            {product.imageUrl && (
              <div className="flex justify-center w-full mb-2">
                <img src={product.imageUrl} alt={product.title} width={200} />
              </div>
            )}
            <h2 className="text-lg font-semibold text-center mb-2">{product.title}</h2>
            <p className="text-gray-500 text-center">Price: ${product.price}</p>
            {/* Link to product details page */}
            <Link href={`/pages/product/${product._id}`}>
              <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4 w-full">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
