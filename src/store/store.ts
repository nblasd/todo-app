import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/features/reducers/todoSlice";

export const store = configureStore({
  reducer: {
    todoSlice: todoReducer,
  },
});
