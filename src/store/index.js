import { configureStore } from "@reduxjs/toolkit";
import orders from "./orders";

export const store = configureStore({
  reducer: {
    orders,
  },
});
