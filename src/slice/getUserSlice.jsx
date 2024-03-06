import { createSlice } from "@reduxjs/toolkit";
import { capstoneApi } from "../api/capstoneApi";

const getUserSlice = createSlice({
  name: "user",
  initialState: {}, // Initial state should be an empty object
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      capstoneApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        // Assuming payload.user is the user data
        return payload.user; // Return new state
      }
    );

    builder.addMatcher(
      capstoneApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        // Assuming payload is the user data
        return { ...state, userData: payload }; // Return new state object
      }
    );
  },
});

export const { setUser } = getUserSlice.actions;

export default getUserSlice.reducer;
