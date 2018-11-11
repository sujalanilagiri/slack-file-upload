export const GET_CHANNELS = "GET_CHANNELS";

export const GET_CHANNELS_RESULT = "GET_CHANNELS_RESULT";

export const OPEN_POPUP = "OPEN_POPUP";

export const CLOSE_POPUP = "CLOSE_POPUP";

export const POST_CHANNELS = "POST_CHANNELS";

export const POST_CHANNELS_RESULT = "POST_CHANNELS_RESULT";

export function getChannelList() {
  console.log("in action ");
  return {
    type: GET_CHANNELS
  };
}

export function postChannelSelected(val) {
  console.log("am here", val);
  return {
    type: POST_CHANNELS,
    data: val
  };
}

export function openPopup() {
  return {
    type: OPEN_POPUP,
    isPoppedOut: true
  };
}

export function closePopup() {
  return {
    type: OPEN_POPUP,
    isPoppedOut: false
  };
}
