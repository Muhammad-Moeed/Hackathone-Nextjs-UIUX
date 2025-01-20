import { defineQuery } from "next-sanity";

export const featuredProducts = defineQuery(
    `*[_type == "products" && "featured" in tags][0..3]{
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      "imageUrl": image.asset->url,
      tags
    }`
  );
  
  export const ourProducts = defineQuery(
    `*[_type == "products"][0..7]{
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      "imageUrl": image.asset->url,
      tags
    }`
  );
  

  export const categories = defineQuery(
    `*[_type == "products"][2..12]{
      _id,
      title,
      price,
      priceWithoutDiscount,
      badge,
      "imageUrl": image.asset->url,
      tags
    }`
  );
  