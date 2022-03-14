import { GET_USER_POST, GET_USER_POST_SUCCESS, GET_USER_POST_ERROR } from "./Type";
import _AXIOS from "../../app/axios";

export const fetchUserPosts = (user) => {
  return (dispatch, getState) => {
    const posts = getState().PostsReducer.posts;
    if (!posts[user.id]) {
      dispatch({ type: GET_USER_POST });
      _AXIOS(`/users/${user.id}/posts`)
        .then((response) => {
          dispatch({ type: GET_USER_POST_SUCCESS, response: { [user.id]: response } });
        })
        .catch((err) => {});
    }
    return false;
  };
};

//https://gorest.co.in/public/v2/users/100/posts
