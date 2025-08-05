import {
  CHECK_USER_EXIST_FAILURE,
  CHECK_USER_EXIST_REQUEST,
  CHECK_USER_EXIST_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../constants/Userconstant';

const initialState = {
  user: null,
  isAuthenticated: false,
  userExists: null,
  loading: false,
  error: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_EXIST_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CHECK_USER_EXIST_SUCCESS:
      return {
        ...state,
        loading: false,
        userExists: action.payload,
      };

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: action.payload,
      };
    case CHECK_USER_EXIST_FAILURE:
    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
