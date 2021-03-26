import Axios from "axios";

import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
} from "../constants/messageConstants";

export const messageMe = (email, coment) => async (dispatch) => {
  try {
  dispatch({ type: MESSAGE_REQUEST, payload: { email, coment } });
    const {data} = await Axios.post("api/message", { email, coment});
    dispatch({ type: MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MESSAGE_ERROR, payload: error.message });
  }
};
