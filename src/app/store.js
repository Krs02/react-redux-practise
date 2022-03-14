import { configureStore } from "@reduxjs/toolkit";

import UserProfileReducer from "../component/profile/Reducer";
import PostsReducer from "../component/posts/Reducer";
import CommentsReducer from "../component/comments/Reducer";

export const store = configureStore({
  reducer: {
    UserProfileReducer,
    PostsReducer,
    CommentsReducer,
  },
});
