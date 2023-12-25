import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const countSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderCount(state, action) {
      state.count = action.payload;
    },
    orderData(state, action) {
      state.orders = action.payload;
    },
  },
});
export const { orderCount, orderData } = countSlice.actions;
export default countSlice.reducer;
