import { CHECK_USER_EXIST_FAILURE, CHECK_USER_EXIST_REQUEST, CHECK_USER_EXIST_SUCCESS } from "../constants/Userconstant";

const initialState = {
  user: null,
  isAuthenticated: false,
  userExists:null,
  loading: false,
  error: null,
};

export const UserReducer= (state=initialState,action)=>{
    switch(action.type){
        case CHECK_USER_EXIST_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            }

        case CHECK_USER_EXIST_SUCCESS:
            return{
                ...state,
                loading: false,
                userExists: action.payload,
                
            }
        case CHECK_USER_EXIST_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
    }
    
}