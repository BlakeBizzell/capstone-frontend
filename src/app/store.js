import { configureStore } from "@reduxjs/toolkit";
import { capstoneApi } from "../api/capstoneApi";
import open5eApiReducer from "../slice/open5eApiSlice";
import productsSlice from "../slice/getProductsSlice";
import productSlice from "../slice/getProductSlice";
import getUserSlice from "../slice/getUserSlice";
import getCartSlice from "../slice/getCartSlice";

export const store = configureStore({
  reducer: {
    [capstoneApi.reducerPath]: capstoneApi.reducer,
    open5eApi: open5eApiReducer, // Add Open5e API slice reducer
    products: productsSlice,
    product: productSlice,
    user: getUserSlice,
    cart: getCartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(capstoneApi.middleware),
});

export default store;
