import axios from 'axios';
import { Categories } from '@/types/Categories';
import { Product } from '@/types/Product';

const path = require('path');

const {
  VUE_APP_STORE_ID: storeId,
  VUE_APP_TOKEN: token,
} = process.env;

const baseURL = 'https://app.ecwid.com/api/v3';

const config = {
  baseURL: path.join(baseURL, storeId),
  params: { token },
};

const fetchData = async (resource: string) => {
  try {
    const response = await axios.get(resource, config);
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getCategories: Promise<Categories> = fetchData('categories');

export const getProducts: Promise<Product> = fetchData('products');
