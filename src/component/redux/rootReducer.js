import { combineReducers } from "redux";
import { themeReducer, channelReducer, userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  channel: channelReducer,
});
