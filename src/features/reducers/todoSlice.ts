import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ data: "Add your Tasks" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = { data: action.payload };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.data != action.payload);
    },
  },
});

export const { addtodo, removetodo } = todoSlice.actions;
export default todoSlice.reducer;
