import axios from 'axios';
import {
  FETCH_EXPENSE_CATEGORY_FAILURE,
  FETCH_EXPENSE_CATEGORY_REQUEST,
  FETCH_EXPENSE_CATEGORY_SUCCESS,
} from '../constants/ExpenseConstant';
import { SERVER_API } from '../../config/Key';

export const fetchExpenseCategories = () => async dispatch => {
  try {
    dispatch({ type: FETCH_EXPENSE_CATEGORY_REQUEST });

    const { data } = await axios.get(`${SERVER_API}/category/all`);

    dispatch({
      type: FETCH_EXPENSE_CATEGORY_SUCCESS,
      payload: data.categories,
    });

    return data.categories;
  } catch (error) {
    dispatch({
      type: FETCH_EXPENSE_CATEGORY_FAILURE,
      payload:
        error.response?.data?.message ||
        error.message ||
        'Something went wrong',
    });
  }
};
