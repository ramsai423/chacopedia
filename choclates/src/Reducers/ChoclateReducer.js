import { GET_CHOCLATE,GET_CHOCLATE_SUCCESS,
    GET_CHOCLATE_FAILURE, GET_CHOCLATE_DETAILS,
    GET_CHOCLATE_DETAILS_SUCCESS,GET_CHOCLATE_DETAILS_FAILURE, 
    GET_BRAND,GET_BRAND_SUCCESS,
    GET_BRAND_FAILURE,GET_BRAND_DETAILS,
    GET_BRAND_DETAILS_SUCCESS, GET_BRAND_DETAILS_FAILURE} from "../ActionTypes/ChoclateTypes";
import produce from "immer";
import { GET_LOGIN,GET_LOGIN_SUCCESS,GET_LOGIN_FAILURE, GET_SIGNUP,GET_SIGNUP_SUCCESS,GET_SIGNUP_FAILURE, CHANGE_INPUT, GET_SEARCH, GET_SEARCH_SUCCESS, GET_SERCH_FAILURE} from "../ActionTypes/Logintypes";

//import { statement } from "@babel/template";
// import { getchoclate } from "../saga/choclate";
 const intialState = {choclate:[],brands:[],choclatedetails:[],branddetails:[],firstName:'',lastName:'',password:'',emailAddress:'',email:'',pwd:'',isLoginSuccess:false,signUpSucess:false,
  searchName:'',SearchChoclate:[],isLoading:false};
const ChoclateReducer = (prevState = intialState,action) =>
 produce(prevState,draft =>{
     switch(action.type)
     {
     case GET_CHOCLATE:
         draft.isLoading = true;
        break;
    case GET_CHOCLATE_SUCCESS:
        draft.choclate = action.choclate;
        break;
    case GET_CHOCLATE_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
    case GET_CHOCLATE_DETAILS:
        draft.isLoading = true;
        break;
    case GET_CHOCLATE_DETAILS_SUCCESS:
        draft.isLoading = false;
        draft.choclatedetails = action.choclatedetails;
        break;
    case GET_CHOCLATE_DETAILS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
    case GET_BRAND:
        draft.isLoading = true;
        break;
    case GET_BRAND_SUCCESS:
        draft.brands = action.brands;
        break;
    case GET_BRAND_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
    case GET_BRAND_DETAILS:
        draft.isLoading = true;
        break;
    case GET_BRAND_DETAILS_SUCCESS:
        draft.branddetails = action.branddetails;
        draft.isLoading = false;
        break;
     case GET_BRAND_DETAILS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
    case CHANGE_INPUT:
        draft[action.feildName]=action.feildValue;
        break;
       
        case GET_LOGIN:
            draft.isLoading = true;
            draft.email = action.email;
            draft.pwd = action.pwd;
            break;
        case GET_LOGIN_SUCCESS:
            draft.isLoading = false
            draft.successData = action.sucessData;
            draft.isLoginSuccess = true;
            break;
        case GET_LOGIN_FAILURE:
            draft.isLoading = false;
            draft.error = action.error;
            draft.isLoginSuccess =false
            break;
            case GET_SIGNUP:
                draft.isLoading = true;
                draft.firstName = action.firstName;
                draft.lastName = action.lastName;
                draft.emailAddress = action.emailAddress;
                draft.password = action.password;
                draft.signUpSucess= true;
                break;
            case GET_SIGNUP_SUCCESS:
                draft.isLoading =false;
                draft.signUpSucess= true;
                break;
            case GET_SIGNUP_FAILURE:
                draft.isLoading = false;
                draft.error = action.error;
                break;
            case GET_SEARCH:
                draft.isLoading = true;
                draft.searchName = action.searchName;
                break;
                case GET_SEARCH_SUCCESS:
                    draft.isLoading = false;
                    draft.SearchChoclate = action.SearchChoclate;
                    break;
                    case GET_SERCH_FAILURE:
                        draft.isLoading = false;
                        draft.error = action.error;
                        break;

     }

    }
);
     
export default ChoclateReducer;