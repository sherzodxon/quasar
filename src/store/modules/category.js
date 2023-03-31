import { CATEGORY } from "../../boot/axios";
import { getData } from "../../api/useApi";

const Category = {
  namespaced: true,
  state: () => ({
    category: [],
  }),
  mutations: {
    setCategory(state, data) {
      state.category = data;
    },
  },
  getters: {
    getSelectCategory(state) {
      return state.category.map((item) => {
        return {
          label: item.name_uz,
          value: item.id,
        };
      });
    },
  },
  actions: {
    async getCategory(context) {
      const data = await getData(CATEGORY.category_type);
      context.commit("setCategory", data);
    },
    async getSelectDefaultValue(context, id) {
      const defaultCategoryIndex = await context.state.category.findIndex(
        (obj) => obj.id === id
      );
      if (defaultCategoryIndex > -1) {
        return {
          label: context.state.category[defaultCategoryIndex].name_uz,
          value: context.state.category[defaultCategoryIndex].id,
        };
      }
    },

  },
};
export default Category;
