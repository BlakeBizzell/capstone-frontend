import { createSlice } from "@reduxjs/toolkit";
import { capstoneApi } from "../api/capstoneApi";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      capstoneApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        return payload.results;
      }
    );
  },
});

export default productsSlice;
