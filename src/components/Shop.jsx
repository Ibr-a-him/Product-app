import { useState } from 'react';
import SingleProduct from './SingleProduct';
import { faker } from '@faker-js/faker';

export default function Shop() {
  const productArray = [...Array(6)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
  console.log(productArray);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-2xl px-5">
      {products.map(product => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
