import { FETCH_EXPENSE_CATEGORY_FAILURE, FETCH_EXPENSE_CATEGORY_REQUEST, FETCH_EXPENSE_CATEGORY_SUCCESS } from "../constants/ExpenseConstant"

const initialState={
    expenseCategories:[],
    loading:false,
    error:null
}

export const ExpenseReducer = (state=initialState,action)=>{
   switch(action.type){
      case FETCH_EXPENSE_CATEGORY_REQUEST:
        return{
             ...state,
             loading:true,
             error:null
        }

      case FETCH_EXPENSE_CATEGORY_SUCCESS:
        return{
            ...state,
            loading:false,
            expenseCategories:action.payload || []
        }
       case FETCH_EXPENSE_CATEGORY_FAILURE:
        return{
            ...state,
            loading:false,
            error:action.payload
        }

        default:
            return state;
   }
}