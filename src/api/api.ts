import axios from 'axios';
import { Categories } from '@/types/Categories';
import { Products } from '@/types/Products';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';

const path = require('path');

const {
  VUE_APP_STORE_ID: storeId,
  VUE_APP_TOKEN: token,
} = process.env;

const baseURL = 'https://app.ecwid.com/api/v3';

type Options = {
  category?: string,
  categoryId?: string
  productId?: string
}

const fetchData = async (resource: string, params?: Options) => {
  const config = {
    baseURL: path.join(baseURL, storeId),
    params: { token, ...params },
  };
  try {
    const response = await axios.get(resource, config);
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCategories = (): Promise<Categories> => fetchData('categories');

export const getCategory = (categoryId: string): Promise<Category> => fetchData(`categories/${categoryId}`);

export const getProducts = (category = '0'): Promise<Products> => fetchData('products', { category });

export const getProduct = (productId: string): Promise<Product> => fetchData(`products/${productId}`);
