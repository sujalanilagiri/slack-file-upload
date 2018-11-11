import { combineReducers } from "redux";
import mainReducer from "../components/Main/modules/mainReducer";

const rootReducer = combineReducers({
  main: mainReducer
});

export default rootReducer;
