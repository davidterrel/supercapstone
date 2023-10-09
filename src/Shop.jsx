import { useState, useEffect, useContext } from 'react';
import ShopProduct from './ShopProduct';
import './shop.css';
import { ProductContext } from './context/ProductContext';

export default function Shop() {
  const { PRODUCTS, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className='shop'>
        <div className='shopTitle'>

          <h1>Davids Shop</h1>
        </div>

        <div className='products'>
          {PRODUCTS.map((product) => (
            <ShopProduct
              key={product.id}
              data={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}
