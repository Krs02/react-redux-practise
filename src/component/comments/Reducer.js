import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS, FETCH_COMMENTS_ERROR } from "./Type";
const initialState = {
  comments: {},
  loading: false,
};

const CommentsReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        loading: true,
      };
      break;

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: {
          ...state.comments,
          ...action["response"],
        },
      };
      break;

    case FETCH_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
      break;

    default:
      return state;
  }
};

export default CommentsReducer;
