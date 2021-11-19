import { BG_COLOR_UPDATE, TEXT_COLOR_UPDATE, NOTIFICATION } from "./Type";
import { decToHex } from "../../Utility";

const initialState = {
  style: {
    backgroundColor: "grey",
    color: "black",
  },
  notification: "",
  loading: false,
};

const PaletteReducer = (state = initialState, action) => {
  switch (action.type) {
    case BG_COLOR_UPDATE:
      let bg = { ...state.style, backgroundColor: decToHex(action.payload) };
      return { ...state, style: bg };
      break;
    case TEXT_COLOR_UPDATE:
      let tc = { ...state.style, color: decToHex(action.payload) };
      return { ...state, style: tc };
      break;
    case "NOTIFICATION":
      break;
    default:
      return state;
      break;
  }
};

export default PaletteReducer;
