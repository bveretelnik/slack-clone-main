import { CLEAR_USER, SET_USER } from "./types";

const initialState = {
  currentUser: null,
  isLoading: true,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        currentUser: payload.currentUser,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        currentUser: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default userReducer;
