import { GET_LOGIN, GET_LOGIN_SUCCESS,
    GET_LOGIN_FAILURE,
    GET_SIGNUP, GET_SIGNUP_SUCCESS,
    GET_SIGNUP_FAILURE,CHANGE_INPUT, GET_SEARCH, GET_SEARCH_SUCCESS, GET_SERCH_FAILURE} from "../ActionTypes/Logintypes";

export function getlogin(email,pwd){
    return{type:GET_LOGIN,email,pwd}
}
export function getloginsuccess(login){
    return{type:GET_LOGIN_SUCCESS,login}

}
export function getloginfailure(error){
    return{type:GET_LOGIN_FAILURE,error}
}
export function changeInput(feildName,feildValue)
{
    return{type:CHANGE_INPUT,feildName,feildValue}
}


export function getsignupsuccess(signup){
    console.log("ijijij",signup)

    return{type:GET_SIGNUP_SUCCESS,signup}

}
export function getsignupfailure(error){
    return{type:GET_SIGNUP_FAILURE,error}

}
export function postSignUp(firstName,lastName,emailAddress,password,signUpSucess){
    console.log(firstName);
    return{
        type:GET_SIGNUP,
        firstName,
        lastName,
        emailAddress,
        password,
        signUpSucess
    }
}
     export function getsearch(searchName)
     {
    return{type:GET_SEARCH,searchName}
      }
    export function getsearchsuccess(SearchChoclate)
    {
        return{type:GET_SEARCH_SUCCESS,SearchChoclate}
    }
    export function getsearchfailure(error)
    {
        return{type:GET_SERCH_FAILURE,error}
    }