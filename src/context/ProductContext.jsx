import {createContext, useState} from 'react';
import {fetchAllProducts} from '../fetchRequests';

export const ProductContext = createContext(null);

export default function ProductContextProvider(props) {
  const [PRODUCTS, setPRODUCTS] = useState([]);

  const getProducts = async () => {
    try {
      const result = await fetchAllProducts();
      setPRODUCTS(result);
    } catch (error) {
      console.log(error);
    }
  };
  const contextValue = {
    PRODUCTS,
    getProducts,
  };
  return (
    <>
      <ProductContext.Provider value={contextValue}>
        {props.children}
      </ProductContext.Provider>
    </>
  );
}
