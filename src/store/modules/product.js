import { PRODUCT } from "../../boot/axios";
import { getData, deleteData, editData, postData } from "../../api/useApi";

const Product = {
  namespaced: true,
  state: () => ({
    product: [],
    productLength: 0,
    loading: false,
  }),
  mutations: {
    setProduct(state, data) {
      state.product = data;
    },
    setProductLength(state, data) {
      state.productLength = data.length;
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
    deleteProduct(state, id) {
      const deleteIndex = state.product.findIndex((obj) => obj.id === id);

      if (deleteIndex > -1) {
        state.product.splice(deleteIndex, 1);
      }
    },
    editProduct(state, data) {
      const editIndex = state.product.findIndex((obj) => obj.id === data.id);

      if (editIndex > -1) {
        state.product.splice(editIndex, 1, data);
      }
    },
    postProduct(state, data) {
      state.product.unshift(data);
    },
  },
  actions: {
    async getProduct(context) {
      context.commit("setLoading", true);
      const data = await getData(PRODUCT.get_product);
      context.commit("setProductLength", data);
      context.commit("setLoading", false);
    },
    async getPagination(context, { page = 1, perPage = 5 }) {
      context.commit("setLoading", true);
      const data = await getData(PRODUCT.pagination_product(page, perPage));
      context.commit("setProduct", data);
      context.commit("setLoading", false);
    },
    async deleteProduct(context, id) {
      context.commit("setLoading", true);
      await deleteData(PRODUCT.delete_product(id));
      context.commit("deleteProduct", id);
      context.commit("setLoading", false);
    },
    async editProduct(context, newData) {
      context.commit("setLoading", true);
      await editData(PRODUCT.put_product, newData);
      context.commit("editProduct", newData);
      context.commit("setLoading", false);
    },
    async createProduct(context, newData) {
      context.commit("setLoading", true);
      await postData(PRODUCT.post_product, newData);
      context.commit("postProduct", newData);
      context.commit("setLoading", false);
    },
  },
};
export default Product;
