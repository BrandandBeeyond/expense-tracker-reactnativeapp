import axios from 'axios';
import {
  CHECK_USER_EXIST_FAILURE,
  CHECK_USER_EXIST_REQUEST,
  CHECK_USER_EXIST_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../constants/Userconstant';
import { SERVER_API } from '../../config/Key';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CheckUserExists = email => async dispatch => {
  try {
    dispatch({ type: CHECK_USER_EXIST_REQUEST });

    const { data } = await axios.post(`${SERVER_API}/user/check-user`, {
      email,
    });

    console.log('upcoming data', data);

    dispatch({
      type: CHECK_USER_EXIST_SUCCESS,
      payload: data.userExists,
    });

    console.log('user existence checking', data.userExists);

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

export const RegisterNewUser =
  ({ name, email, mobile, gender, password }) =>
  async dispatch => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const { data } = await axios.post(`${SERVER_API}/user/register`, {
        name,
        email,
        mobile,
        gender,
        password,
      });

      AsyncStorage.setItem('authToken', data.token);

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAILURE,
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
