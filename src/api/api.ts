// import { Category } from '../types/Category';
import { Product } from '../types/Product';
//
// const fetchData = async (url: string): Promise<T> => {
//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json() as Promise<T>;
//     });
// };
//
// export const getCategories: () => Promise<Category> = () => fetchData('./categories.json');
//
// export const getProducts: () => Promise<Product> = () => fetchData('./products.json');

export const getProducts = async (): Promise<Product> => {
  const response = await fetch('./products.json', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('response', response);
  const products = await response.json();
  console.log('products', products);
  return products.items;
};

export const Pi = Math.PI;
