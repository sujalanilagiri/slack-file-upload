import {
  GET_CHANNELS,
  GET_CHANNELS_RESULT,
  POST_CHANNELS,
  POST_CHANNELS_RESULT,
  OPEN_POPUP,
  CLOSE_POPUP
} from "./mainActions";

const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CHANNELS:
    case GET_CHANNELS_RESULT:
      return {
        ...state,
        channelList: action.data
      };
    case POST_CHANNELS:
      return {
        ...state,
        selectedValue: action.data
      };
    case POST_CHANNELS_RESULT:
      return {
        ...state,
        response: action.val,
        isPoppedOut: false
      };
    case OPEN_POPUP:
      return {
        ...state,
        isPoppedOut: true
      };
    case CLOSE_POPUP:
      return {
        ...state,
        isPoppedOut: false
      };
    default:
      return state;
  }
};

export default mainReducer;
