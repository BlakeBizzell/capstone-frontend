import { createSlice } from "@reduxjs/toolkit";
import { capstoneApi } from "../api/capstoneApi";

const getCartSlice = createSlice({
  name: "cart",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      capstoneApi.endpoints.getCartItems.matchFulfilled,
      (state, { payload }) => {
        return payload.results;
      }
    );
  },
});

export default getCartSlice;
