import { configureStore } from "@reduxjs/toolkit";
import { capstoneApi } from "../api/capstoneApi";
import productsSlice from "../slice/getProductsSlice";
import productSlice from "../slice/getProductSlice";
import getUserSlice from "../slice/getUserSlice";
import getCartSlice from "../slice/getCartSlice";

export const store = configureStore({
  reducer: {
    [capstoneApi.reducerPath]: capstoneApi.reducer,
    products: productsSlice,
    product: productSlice,
    user: getUserSlice,
    cart: getCartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(capstoneApi.middleware),
});

export default store;
