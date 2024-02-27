import { createSlice } from "@reduxjs/toolkit";
import { capstoneApi } from "../api/capstoneApi";

const productSlice = createSlice({
  name: "product",
  initialState: null,
  extraReducers: (builder) => {
    builder.addMatcher(
      capstoneApi.endpoints.getProduct.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default productSlice;
