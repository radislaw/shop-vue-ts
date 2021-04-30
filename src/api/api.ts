import { Categories } from '@/types/Categories';
import { Product } from '@/types/Product';

const path = require('path');

const {
  VUE_APP_BASE_URL: BASE_URL,
  VUE_APP_STORE_ID: STORE_ID,
  VUE_APP_TOKEN: TOKEN,
} = process.env;

type Params = {
  category?: string
}

const fetchData = async (resource: string, params: Params) => {
  const url = new URL(path.join(BASE_URL, STORE_ID, resource));
  Object.keys(params).forEach((key) => {
    const param: string | undefined = params[key as keyof Params];
    if (typeof param === 'string') {
      url.searchParams.append(key, param);
    }
  });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
//
export const getCategories: Promise<Categories> = fetchData('categories', {});
export const getProducts: Promise<Product[]> = fetchData('products', {});

// export const getProducts = async (): Promise<Product> => {
//   const response = await fetch('https://my-json-server.typicode.com/radislaw/shop-vue-ts', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   console.log('response', response);
//   const products = await response.json();
//   console.log('products', products);
//   return products.items;
// };
