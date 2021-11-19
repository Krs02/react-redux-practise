import { combineReducers } from "redux";
import PaletteReducer from "../features/palette/Reducer";

const rootReducer = combineReducers({
  PaletteReducer,
});

export default rootReducer;
