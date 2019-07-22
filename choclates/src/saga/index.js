import {takeLatest,all, take}from "redux-saga/effects";
import{GET_CHOCLATE,GET_CHOCLATE_DETAILS,GET_BRAND,GET_BRAND_DETAILS}from "../ActionTypes/ChoclateTypes";
import getchoclatesaga, { postusers,getloginusers, getsearchdata } from "./choclate";
import {getbrandsaga, getchoclatedetailssaga,getbranddetailssaga} from "./choclate";
import { GET_SIGNUP, GET_LOGIN, GET_SEARCH } from "../ActionTypes/Logintypes";
export function* chocolateWatcherSaga(){
    yield all([takeLatest(GET_CHOCLATE,getchoclatesaga),
        takeLatest(GET_BRAND,getbrandsaga),
        takeLatest(GET_CHOCLATE_DETAILS, getchoclatedetailssaga),
        takeLatest(GET_BRAND_DETAILS, getbranddetailssaga),
        takeLatest(GET_SIGNUP, postusers),
        takeLatest(GET_LOGIN,getloginusers),
        takeLatest(GET_SEARCH,getsearchdata)

    ]);

}

