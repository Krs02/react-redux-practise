import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS, FETCH_COMMENTS_ERROR } from "./Type";
import _AXIOS from "../../app/axios";

export const fetchPostComments = (postId) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_COMMENTS,
    });
    _AXIOS(`/posts/${postId}/comments`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          response: {
            [postId]: response,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FETCH_COMMENTS_ERROR,
          err,
        });
      });
  };
};
