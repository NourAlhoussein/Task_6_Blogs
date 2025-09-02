import { createSlice } from "@reduxjs/toolkit";
import { blogsData } from "../../Data/Blogs";

const blogSlice = createSlice({
  name: "blogs",
  initialState: blogsData,
  reducers: {},
});

export default blogSlice.reducer;
