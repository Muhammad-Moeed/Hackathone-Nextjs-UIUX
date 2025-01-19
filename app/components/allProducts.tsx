'use client'
import { client } from '../../sanity/lib/client';

const query = '*[_type == "products"]';
client.fetch(query).then(console.log).catch(console.error);


interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
  category?: {
    _ref: string;
  };
  description?: string;
  inventory?: number;
  tags?: string[];
}


export async function getStaticProps() {
  console.log('Fetching products...');  // Check if function is being called
  try {
    const products: Product[] = await client.fetch(query);
    console.log('Fetched products:', products);  // Check fetched data
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);  // Check if error occurs
    return {
      props: {
        products: [],
      },
    };
  }
}



export default function Products({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          {product.image && (
            <img
              src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${product.image.asset._ref}`}
              alt={product.title}
              width={200}
            />
          )}
        </div>
      ))} 
    </div>
  );
}
