import { LOAD_USER_PROFILE, LOAD_USER_PROFILE_SUCCESS, LOAD_USER_PROFILE_ERROR } from "./Type";
const initialState = {
  users: [],
  loading: false,
  error: null,
  notifyMsg: "",
};

const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_PROFILE:
      return {
        ...state,
        loading: true,
        notifyMsg: LOAD_USER_PROFILE,
      };
      break;

    case LOAD_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.response,
        notifyMsg: LOAD_USER_PROFILE_SUCCESS,
      };
      break;

    case LOAD_USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        notifyMsg: LOAD_USER_PROFILE_ERROR,
      };
      break;

    default:
      return state;
  }
};

export default UserProfileReducer;
