import { FILED_UPDATE } from "./Type";

const initialState = {
  user: {
    name: "",
    location: "",
    profilepic: "",
    skills: [],
  },
  loading: false,
  error: "",
};

const UploaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILED_UPDATE:
      return { ...state, loading: true };
      break;

    default:
      return state;
      break;
  }
};
export default UploaderReducer;
