import Axios from "axios";

import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
} from "../constants/messageConstants";

export const messageMe = (email, comment) => async (dispatch) => {
  try {
  dispatch({ type: MESSAGE_REQUEST, payload: { email, comment } });
    const {data} = await Axios.post("api/message");
    dispatch({ type: MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MESSAGE_ERROR, payload: error.message });
  }
};
