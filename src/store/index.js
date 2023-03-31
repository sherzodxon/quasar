import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import category from "./modules/category";
import product from "./modules/product";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      category,
      product,
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
