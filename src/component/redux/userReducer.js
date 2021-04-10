import {
  CLEAR_USER,
  SET_CURRENT_CHANNEL,
  SET_USER,
  TOGGLE_THEME,
} from "./types";

const initialState = {
  currentUser: null,
  isLoading: true,
};

export const userReducer = (state = initialState, { type, payload }) => {
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

const initialChannelState = {
  currentChannel: null,
};
export const channelReducer = (
  state = initialChannelState,
  { type, payload }
) => {
  switch (type) {
    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: payload.currentChannel,
      };

    default:
      return state;
  }
};

const initialTmeme = {
  theme: false,
};

export const themeReducer = (state = initialTmeme, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return {
        theme: !state.theme,
      };

    default:
      return state;
  }
};
