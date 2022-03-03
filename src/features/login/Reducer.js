import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGIN_USER_IN_PROGRESS } from "./Type";
const intialState = {
  loading: false,
  status: "",
  user: {
    name: "",
    email: "",
    phone: "",
    city: "",
  },
};
const LoginReducer = (state = intialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_IN_PROGRESS":
      break;
    case "LOGIN_USER_ERROR":
      break;
    case "LOGIN_USER_SUCCESS":
      break;

    default:
      return state;
      break;
  }
};

export default LoginReducer;
