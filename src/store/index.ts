import { createStore } from 'vuex';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';
import { getCategories, getProducts } from '@/api/api';

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_PRODUCTS = 'SET_PRODUCTS';

export default createStore({
  state: {
    categories: [] as Category[],
    products: [] as Product[],
  },
  mutations: {
    [SET_CATEGORIES](state, payload) {
      state.categories = payload;
    },
    [SET_PRODUCTS](state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const { items } = await getCategories();
      commit(SET_CATEGORIES, items);
    },
    async fetchProducts({ commit }, opts) {
      const { items } = await getProducts(opts);
      console.log('items', items);
      commit(SET_PRODUCTS, items);
    },
  },
});
