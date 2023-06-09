import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const Axios = axios.create({ baseURL: 'http://94.158.54.194:9092' });

const PRODUCT = {
  get_product: "/api/product",
  post_product: "/api/product",
  delete_product: (id) => `/api/product/${id}`,
  put_product: "/api/product",
  one_product: (id) => `/api/product/${id}`,
};

const CATEGORY = {
  category_type: "/api/product/get-product-types",
};

export { Axios, PRODUCT, CATEGORY };
