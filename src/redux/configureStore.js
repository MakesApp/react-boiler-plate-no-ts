import { configureStore } from "@reduxjs/toolkit";
import { exampleSlice } from "./slices/example.slice";

export const store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
