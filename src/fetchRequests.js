export const URL = 'https://fakestoreapi.com';

//GET Products
export async function fetchAllProducts() {
  try {
    const response = await fetch(`${URL}/products`);
    const result = response.json();
    return result;
  } catch (error) {
    console.error(`ERROR FETCHING ALL PRODUCTS: ${error}`);
  }
}

//GET Single Product
export async function fetchSingleProduct(id) {
  try {
    const response = await fetch(`${URL}/products/${id}`);
    const result = response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(`ERROR FETCHING ITEM #${id}: ${error}`);
  }
}
