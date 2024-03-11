import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import TaskReducer from "./Task/TaskSlice"

export const store = configureStore({
  reducer: {
    TaskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
