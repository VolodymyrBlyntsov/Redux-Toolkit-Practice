import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import todoSlice from "../features/todo/todoSlice";
import userSlice from "../features/user/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        post: postSlice,
    }
})

export default store;