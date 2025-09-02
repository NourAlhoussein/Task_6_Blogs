import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../blogsSlice/index";
const store = configureStore({
  reducer: { blogs: blogReducer },
});
export default store;
// Correct RootState type for my app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
