import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ data: "first task" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = { data: action.payload };
      state.todos.push(todo);
    },
  },
});

export const { addtodo } = todoSlice.actions;
export default todoSlice.reducer;
