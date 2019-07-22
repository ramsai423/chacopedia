import { GET_CHOCLATE, GET_CHOCLATE_SUCCESS,
    GET_CHOCLATE_FAILURE,GET_CHOCLATE_DETAILS,
    GET_CHOCLATE_DETAILS_SUCCESS, GET_CHOCLATE_DETAILS_FAILURE,
    GET_BRAND, GET_BRAND_SUCCESS,
    GET_BRAND_FAILURE,GET_BRAND_DETAILS,
    GET_BRAND_DETAILS_SUCCESS, GET_BRAND_DETAILS_FAILURE} from "../ActionTypes/ChoclateTypes";

export function getchoclate(){
    return{type:GET_CHOCLATE}
}
export function getchoclatesuccess(choclate){
    return{type:GET_CHOCLATE_SUCCESS,choclate}

}
export function getchoclatefailure(error){
    return{type:GET_CHOCLATE_FAILURE,error}

}
export function getchoclatedetails(id)
{
    return{type:GET_CHOCLATE_DETAILS, id}

    
}
export function getchoclatedetailssuccess(choclatedetails)

{
    return{type:GET_CHOCLATE_DETAILS_SUCCESS,choclatedetails}
}
export function getchoclatedetailsfailure(error)
{
    return{type:GET_CHOCLATE_DETAILS_FAILURE,error}
}
export function getbrand(){
    return{type:GET_BRAND}
}
export function getbrandsuccess(brands){
    console.log("ijijij",brands)

    return{type:GET_BRAND_SUCCESS,brands}

}
export function getbrandfailure(error){
    return{type:GET_BRAND_FAILURE,error}

}
export function getbranddetails(id)
{
    return{type:GET_BRAND_DETAILS,id}

    
}
export function getbranddetailssuccess(branddetails)

{
    return{type:GET_BRAND_DETAILS_SUCCESS,branddetails}
}
export function getbranddetailsfailure(error)
{
    return{type:GET_BRAND_DETAILS_FAILURE,error}
}