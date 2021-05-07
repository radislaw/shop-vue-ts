import { createStore } from 'vuex';
import { Category } from '@/types/Category';
import { getCategories } from '@/api/api';

const SET_CATEGORIES = 'SET_CATEGORIES';

export default createStore({
  state: {
    cart: {},
  },
  mutations: {
    [SET_CATEGORIES](state, payload: Category[]) {
      state.cart = payload;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const { items } = await getCategories();
      commit(SET_CATEGORIES, items);
    },
  },
});
