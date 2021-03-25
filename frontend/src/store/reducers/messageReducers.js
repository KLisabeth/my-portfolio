const {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
} = require("../constants/messageConstants");

function messageReducer(state = {}, action) {
  switch (action.type) {
    case MESSAGE_REQUEST:
      return { loading: true };
    case MESSAGE_SUCCESS:
      return { loading: false, data: action.payload , success: true };
    case MESSAGE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default messageReducer;
