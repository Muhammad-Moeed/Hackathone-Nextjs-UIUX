'use client';

import React, { useState, useEffect } from 'react';

interface ProductDetailsProps {
  productId: string;
}

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center w-full md:w-1/2 mb-4 md:mb-0">
          <img src={product.imageUrl} alt={product.title} width={300} />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold">Price: ${product.price}</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
