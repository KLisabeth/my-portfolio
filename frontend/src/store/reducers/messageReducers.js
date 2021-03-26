const {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
  MESSAGE_RESET
} = require("../constants/messageConstants");

function messageReducer(state = {}, action) {
  switch (action.type) {
    case MESSAGE_REQUEST:
      return { loading: true };
    case MESSAGE_SUCCESS:
      return { loading: false, data: action.payload, success: true };
    case MESSAGE_ERROR:
      return { loading: false, error: action.payload };
      case MESSAGE_RESET:
        return {}
    default:
      return state;
  }
}

export default messageReducer;
