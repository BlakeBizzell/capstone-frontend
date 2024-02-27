import { createSlice } from "@reduxjs/toolkit";
import { capstoneApi } from "../api/capstoneApi";

const getUserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      capstoneApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        const userId = payload.user.id;
        return payload.user;
      }
    );

    builder.addMatcher(
      capstoneApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        state.user = {
          ...state,
          userData: payload,
        };
      }
    );
  },
});

export default getUserSlice.reducer;
