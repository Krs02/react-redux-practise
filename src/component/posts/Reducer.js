import { GET_USER_POST, GET_USER_POST_SUCCESS, GET_USER_POST_ERROR } from "./Type";
const initialState = {
  loading: false,
  posts: {},
};
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_POST:
      return { ...state, loading: true };
      break;
    case GET_USER_POST_SUCCESS:
      const posts = { ...state.posts, ...action["response"] };
      return { ...state, loading: false, posts };
      break;
    case GET_USER_POST_ERROR:
      return { ...state, loading: false };
      break;
    default:
      return state;
  }
};
export default PostsReducer;
