import axios from 'axios';
import {
  CHECK_USER_EXIST_FAILURE,
  CHECK_USER_EXIST_REQUEST,
  CHECK_USER_EXIST_SUCCESS,
} from '../constants/Userconstant';
import { SERVER_API } from '../../config/Key';

export const CheckUserExists = email => async dispatch => {
  try {
    dispatch({ type: CHECK_USER_EXIST_REQUEST });

    const { data } = await axios.post(`${SERVER_API}/user/check-user`, {
      email,
    });

    dispatch({
      type: CHECK_USER_EXIST_SUCCESS,
      payload: data.userExists,
    });

    return data.userExists;
  } catch (error) {
    dispatch({
      type: CHECK_USER_EXIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    );
  }
};
